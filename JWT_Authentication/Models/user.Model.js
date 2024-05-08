import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
});

export const JwtUser = mongoose.model("JwtUser", userSchema);

export default JwtUser;
