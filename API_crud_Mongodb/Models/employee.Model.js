import mongoose from "mongoose";

const emplySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  postion: String,
});

const Employee = mongoose.model("Employee", emplySchema);

export default Employee;
