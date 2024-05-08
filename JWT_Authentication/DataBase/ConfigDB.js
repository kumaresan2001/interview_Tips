import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURL = process.env.MONGO_CONNECTION_URL;

const ConnectDB = async () => {
  try {
    const Connecturl = await mongoose.connect(MongoURL);
    console.log("Connected to the MongoDB");
    return Connecturl;
  } catch (error) {
    console.log(error);
  }
};
export default ConnectDB;
