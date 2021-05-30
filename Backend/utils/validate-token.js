const jwt = require("jsonwebtoken");

//middleware to validate token

const verifyToken = (req, res, next) => {
  const refreshedToken = [];

  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET||process.env.JWT_TAJ, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = verifyToken;
