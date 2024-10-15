const Empleado = require("../models/Empleado");

let empleados = [
  new Empleado(1, "Martin Perez"),
  new Empleado(2, "Juan Lopez"),
  new Empleado(3, "Ariel Diaz"),
  new Empleado(4, "Laura Gonzalez"),
  new Empleado(5, "Pedro Ramirez"),
];

const getEmpleados = (req, res) => {
  res.json(empleados);
};

const getEmpleadoById = (req, res) => {
  const empleado = empleados.find((emp) => emp.id === parseInt(req.params.id));
  if (empleado) {
    res.json(empleado);
  } else {
    res.status(404).json({ message: "Empleado no encontrado" });
  }
};

const createEmpleado = (req, res) => {
  const newEmpleado = new Empleado(empleados.length + 1, req.body.nombre);
  empleados.push(newEmpleado);
  res.status(201).json(newEmpleado);
};

const updateEmpleado = (req, res) => {
  const empleado = empleados.find((emp) => emp.id === parseInt(req.params.id));
  if (empleado) {
    empleado.nombre = req.body.nombre;
    res.json(empleado);
  } else {
    res.status(404).json({ message: "Empleado no encontrado" });
  }
};

const deleteEmpleado = (req, res) => {
  const index = empleados.findIndex(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    empleados.splice(index, 1);
    res.json({ message: "Empleado eliminado" });
  } else {
    res.status(404).json({ message: "Empleado no encontrado" });
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
