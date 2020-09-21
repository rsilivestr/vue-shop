const bcrypt = require('bcrypt');
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const db = JSON.parse(fs.readFileSync('./server/db.json', 'utf8'));

const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
server.use(jsonServer.bodyParser);

const secretKey = 's0C9vs0mb@70sP1.22fJs8A;';

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

  // Send token
  jwt.sign({ user }, secretKey, { expiresIn: '8h' }, (err, token) => {
    res.json({ token });
  });
});

// Auth middleware
server.post('/items', verifyToken, (req, res, next) => {
  // Verify user's token
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      // Validate item
      // ...
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
