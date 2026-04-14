import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function userRegister(req, res) {
  let { username, email, password } = req.body;
  let isUserExist = await userModel.findOne({
    $or: [{ email }],
  });
  if (isUserExist) {
    return res.status(409).json({
      msg: "user already exist",
    });
  }

  let hash = await bcrypt.hash(password, 10);
  let user = await userModel.create({
    username,
    email,
    password: hash,
  });
  const token = jwt.sign({ id: user._id, name: username }, process.env.JWT_URI);
  res.cookie("token", token);
  return res.status(201).json({
    msg: "User registered",
    user,
  });
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ email }],
  });
  if (!user) {
    return res.status(401).json({
      msg: "User not found",
    });
  }
  const isValidPass = await bcrypt.compare(password, user.password);
  if (!isValidPass) {
    return res.status(401).json({
      msg: "Wrong password",
    });
  }
  const token = jwt.sign(
    { id: user._id, name: user.username },
    process.env.JWT_URI,
  );
  res.cookie("token", token);
  return res.status(200).json({
    msg: "user login successfully",
    user,
  });
}

export async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    msg: "logout user!",
  });
}
