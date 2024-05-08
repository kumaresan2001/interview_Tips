import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authmiddleware = (req, res, next) => {
  //   const token = req.header("Authorization");
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decode = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    console.log("requestr", req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Invalid token , Internal error" });
  }
};

export default authmiddleware;
