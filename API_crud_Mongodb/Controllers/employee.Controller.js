import Employee from "../Models/employee.Model.js";

export const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(200).json({ message: "employee created", data: employee });
  } catch (error) {
    res.status(500).json({ error: "Error in employee creation" });
    console.log(error);
  }
};

export const getallEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error in employee getting" });
    console.log(error);
  }
};

export const getaEmployeebyId = async (req, res) => {
  try {
    const empId = req.params.id;
    const employee = await Employee.findById(empId);

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error in employee get by Id" });
    console.log(error);
  }
};

export const updateEmployeebyId = async (req, res) => {
  try {
    const empId = req.params.id;
    const { firstName, lastName, email, postion } = req.body;
    const result = await Employee.updateOne(
      { _id: empId },
      { firstName, lastName, email, postion }
    );
    // console.log(result);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "employee is not found" });
    }
    const updateEmp = await Employee.findById(empId);
    res.status(200).json({ message: "employee updayed", data: updateEmp });
  } catch (error) {
    res.status(500).json({ error: "Error in employee update" });
    console.log(error);
  }
};

export const deleteEmployeebyId = async (req, res) => {
  try {
    const empId = req.params.id;
    const result = await Employee.deleteOne({ _id: empId });
    // console.log(result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "employee is not found" });
    }

    res.status(200).json({ message: "employee delete" });
  } catch (error) {
    res.status(500).json({ error: "Error in employee delete" });
    console.log(error);
  }
};
