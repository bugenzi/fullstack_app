const jwt = require("jsonwebtoken");
const getJwtId = (data) => {
  const token = jwt.sign(
    // payload data
    {
      username: data.username,
      id: data._id,
    },
    process.env.TOKEN_SECRET||process.env.JWT_TAJ,
    { expiresIn: "20h" }
  );
  return token;
};
module.exports = getJwtId;
