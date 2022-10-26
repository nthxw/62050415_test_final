const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    messages: "successfuly loaded ",
    data: users,
  });
};

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  const user = new User({
    username: username,
    password: password,
  });
  await user.save();

  res.status(201).json({
    messages: "successfuly registered",
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    res.status(404).json({
      messages: "no user founded",
    });
  }

  if (user.password !== password) {
    res.status(404).json({
      messages: "password not match",
    });
  }

  const token = await jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    "monkey",
    { expiresIn: "5 day" }
  );

  const expires_In = jwt.decode(token);

  return res.status(200).json({
    access_token: token,
    expires_In: expires_In.exp,
    token_type: "Bearer",
    data: user,
  });
};
