import express from "express";
import { userRegister, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", userRegister);
router.post("/login", loginUser);

export default router;
