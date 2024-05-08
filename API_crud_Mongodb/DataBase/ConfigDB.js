import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBconnectionString = process.env.MONGO_CONNECTION_URL;

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(DBconnectionString);
    console.log("MongoDB is connected");
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
