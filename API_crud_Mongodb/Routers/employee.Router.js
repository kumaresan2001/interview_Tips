import {
  createEmployee,
  getallEmployee,
  getaEmployeebyId,
  updateEmployeebyId,
  deleteEmployeebyId,
} from "../Controllers/employee.Controller.js";
import express from "express";

const router = express.Router();

router.post("/create/emp", createEmployee);
router.get("/getall/emp", getallEmployee);
router.get("/empId/:id", getaEmployeebyId);
router.put("/update/empId/:id", updateEmployeebyId);
router.delete("/delete/empId/:id", deleteEmployeebyId);
export default router;
