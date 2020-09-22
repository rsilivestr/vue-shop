const bcrypt = require('bcrypt');
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

// Get database into memory
const db = JSON.parse(fs.readFileSync('./server/db.json', 'utf8'));

const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// Enable request body parser
server.use(jsonServer.bodyParser);

// jsonwebtoken secret key
const SECRET_KEY = 's0C9vs0mb@70sP1.22fJs8A;';

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  if ('undefined' !== typeof bearerHeader) {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

// Login into API
server.post('/login', (req, res) => {
  // Mock user (user:123456)
  const user = db.users.find((user) => user.username === req.body.username);

  // Return forbidden if user was not found
  if (typeof user === 'undefined') {
    res.sendStatus(403);
  }

  // Validate password
  if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
    res.sendStatus(403);
  }

  // Create and send token
  jwt.sign({ user }, SECRET_KEY, { issuer: 'vueShop', expiresIn: '8h' }, (err, token) => {
    const userInfo = { ...user };
    delete userInfo.passwordHash;

    res.json({ user: userInfo, token });
  });
});

// Auth middleware
server.post('/items', verifyToken, (req, res, next) => {
  // Verify user's token and rights
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err || !authData.user.isAdmin) {
      res.sendStatus(403);
    } else {
      // Validate item
      // ...
      // Display message in console
      console.log('Item added by ' + authData.user.username);
      next();
    }
  });
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
