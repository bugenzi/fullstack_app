const router = require("express").Router();
const User = require("../models/user.model");
const Feed = require("../models/post.model");
const bcrypt = require("bcryptjs");

const jwtParser = require("../utils/parseJWT");
const getJwtToken = require("../utils/tokenMiddlewear");
const parseUserdata = require("../utils/parseUserData");

const {
  registerValidation,
  loginValidation,
  tradingValidation,
} = require("../utils/registerValidation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  const isEmailExist = await User.findOne({ email: req.body.email });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  if (isEmailExist) {
    return res.status(400).json({ error: "Email already exist " });
  }
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    name: req.body.name || "Name not set",
    surname: req.body.surname || "Surname not set",
    description: req.body.description || "description not set",
    email: req.body.email,
    password: password,
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// login route
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ error: "Wrong email " });
  }

  //checks for password corretness
  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!validatePassword) {
    return res.status(400).json({ message: "wrong password" });
  }
  const token = getJwtToken(user);

  res.header("Authorization", token).json({
    error: null,
    data: {
      token,
      id: token.payload,
    },
  });
});

router.get("/user/:id", async (req, res) => {
  let userID = req.params.id;
  if (!userID) {
    res.status(404).send({ message: "User not found " });
  }
  User.findById(userID)
    .then((user) => {
      let userData = parseUserdata(user);
      res.send({ userData });
    })
    .catch((err) => {
      res.status(400).json({ message: "user not found or wrong id", err });
    });
});

router.get("/auth/me", async (req, res) => {
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  await User.findById(jwtPayload.id)
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

router.patch("/auth/me/update", async (req, res) => {
  let userUpdate = {};
  if (req.body.username) {
    userUpdate.username = req.body.username;
  }
  if (req.body.name) {
    userUpdate.name = req.body.name;
  }
  if (req.body.surname) {
    userUpdate.surname = req.body.surname;
  }
  if (req.body.email) {
    userUpdate.email = req.body.email;
  }
  if (req.body.description) {
    userUpdate.description = req.body.description;
  }

  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  await User.findByIdAndUpdate(jwtPayload.id, userUpdate)
    .then(() => {
      User.findById(jwtPayload.id).then((user) => {
        res.json({ user });
      });
    })
    .catch((err) => {
      res.status(400).json({ message: `Error message ${err}` });
    });
});

router.post("/user/:user_id/follow", (req, res) => {
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  let user_id = req.params.user_id;
  if (jwtPayload.id === user_id) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }
  User.findByIdAndUpdate(
    { _id: user_id },
    { $addToSet: { followers: jwtPayload.id } }
  )
    .then(() => {
      User.findByIdAndUpdate(
        { _id: jwtPayload.id },
        { $addToSet: { following: user_id } }
      )
        .then((data) => {
          res.send(data);
        })
        .catch((er) => {
          res.status(400).json({ message: er });
        });
    })
    .catch((er) => {
      res.status(400).json({ message: er });
    });
});
router.post("/user/:user_id/unfollow", (req, res) => {
  let jwtPayload = jwtParser(req.headers.authorization.split(" ")[1]);
  let user_id = req.params.user_id;
  if (jwtPayload.id === user_id) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }

  User.findByIdAndUpdate(
    { _id: user_id },
    { $pull: { following: jwtPayload.id } }
  )
    .then(() => {
      User.findByIdAndUpdate(
        { _id: jwtPayload.id },
        { $pull: { following: user_id } }
      )
        .then((data) => {
          res.send(data);
        })
        .catch((er) => {
          res.status(400).json({ message: er });
        });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});
module.exports = router;
