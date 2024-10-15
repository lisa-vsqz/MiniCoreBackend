const Proyecto = require("../models/Proyecto");

let proyectos = [
  new Proyecto(1, "Udla Website"),
  new Proyecto(2, "Supermaxi App"),
  new Proyecto(3, "Cigarra Pedidos"),
  new Proyecto(4, "Udla Parqueos"),
  new Proyecto(5, "Oki App"),
  new Proyecto(6, "Proyecto Hanaska"),
];

const getProyectos = (req, res) => {
  res.json(proyectos);
};

const getProyectoById = (req, res) => {
  const proyecto = proyectos.find(
    (proj) => proj.id === parseInt(req.params.id)
  );
  if (proyecto) {
    res.json(proyecto);
  } else {
    res.status(404).json({ message: "Proyecto no encontrado" });
  }
};

const createProyecto = (req, res) => {
  const newProyecto = new Proyecto(proyectos.length + 1, req.body.nombre);
  proyectos.push(newProyecto);
  res.status(201).json(newProyecto);
};

const updateProyecto = (req, res) => {
  const proyecto = proyectos.find(
    (proj) => proj.id === parseInt(req.params.id)
  );
  if (proyecto) {
    proyecto.nombre = req.body.nombre;
    res.json(proyecto);
  } else {
    res.status(404).json({ message: "Proyecto no encontrado" });
  }
};

const deleteProyecto = (req, res) => {
  const index = proyectos.findIndex(
    (proj) => proj.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    proyectos.splice(index, 1);
    res.json({ message: "Proyecto eliminado" });
  } else {
    res.status(404).json({ message: "Proyecto no encontrado" });
  }
};

module.exports = {
  getProyectos,
  getProyectoById,
  createProyecto,
  updateProyecto,
  deleteProyecto,
};
