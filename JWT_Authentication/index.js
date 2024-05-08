import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import ConnectDB from "./DataBase/ConfigDB.js";
import userRouter from "./Routers/user.router.js";
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
ConnectDB();

app.use("/api", userRouter);
app.listen(PORT, () => {
  console.log(`App listening port:${PORT}✨🎉⭐`);
});
