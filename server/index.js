const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Connect to the database
const adapter = new FileSync('./server/db.json');
const db = low(adapter);

// Create express server
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// Enable request body parser
server.use(jsonServer.bodyParser);

// jsonwebtoken secret key
const SECRET_KEY = 'ABC';

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

// Register user
server.post('/register', (req, res) => {
  const user = req.body;
  const { email, password, firstName } = user;

  // Validate data...

  // Prepare database entry
  const passwordHash = bcrypt.hashSync(password, 10);
  const userEntry = {
    email,
    firstName,
    passwordHash,
    isAdmin: false,
  };
  // Write to db
  db.get('users').push(userEntry).write();

  // Prepare jwt payload info
  const publicUserInfo = { firstName, isAdmin: false };
  // Create and send token
  jwt.sign(
    { publicUserInfo },
    SECRET_KEY,
    { issuer: 'vueShop', expiresIn: '8h' },
    (err, token) => res.json({ token })
  );
});

// Login into API
server.post('/login', (req, res) => {
  // Find user
  const user = db.get('users').find({ email: req.body.email }).value();

  // Return forbidden if user was not found
  if (typeof user === 'undefined') {
    // res.sendStatus(403);
    res.json({ message: 'Нет такой почты' });
  }

  // Validate password
  if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
    // res.sendStatus(403);
    res.json({ message: 'Неверный пароль' });
  }

  // Get public user info for token payload
  const { firstName, isAdmin } = user;
  const publicUserInfo = { firstName, isAdmin };

  // Create and send token
  jwt.sign(
    { publicUserInfo },
    SECRET_KEY,
    { issuer: 'vueShop', expiresIn: '8h' },
    (err, token) => res.json({ token })
  );
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
