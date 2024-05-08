import JwtUser from "../Models/user.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hasspassword = await bcrypt.hash(password, 10);
    const user = new JwtUser({ username, email, password: hasspassword });
    await user.save();

    res.status(200).json({ message: "User Registed", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Register Faild ,Inter error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await JwtUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User is not" });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();
    res
      .status(200)
      .json({ message: "login successfly", data: user, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login Faild ,Inter error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await JwtUser.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in get User" });
  }
};
