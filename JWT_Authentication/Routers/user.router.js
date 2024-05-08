import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../Controllers/user.Controller.js";
import authmiddleware from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/getuser", authmiddleware, getUser);

export default router;
