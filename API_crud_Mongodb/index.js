import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import ConnectDB from "./DataBase/ConfigDB.js";
import empoRuter from "./Routers/employee.Router.js";

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
ConnectDB();

app.use("/api", empoRuter);

app.listen(port, () => {
  console.log(`App is listening in the port:${port}🎉✨✨`);
});
