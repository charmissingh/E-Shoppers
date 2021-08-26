import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

import User from "../modals/user.js";

export const userRegister = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.send({
      message:
        "we've found an existing account using the same email address you've provided",
    });
  } else {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
      message:'Account successfully created'
    });
  }
};

export const userSignin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const userpassword = await req.body.password;
    if (bcrypt.compareSync(userpassword, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
};
