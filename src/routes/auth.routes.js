import express from "express";
import {
  userRegister,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", userRegister);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
