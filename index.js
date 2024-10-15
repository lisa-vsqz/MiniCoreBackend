const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Permitir todas las solicitudes CORS
const port = process.env.PORT || 3000;
const empleadoRoutes = require("./routes/empleadoRoutes");
const proyectoRoutes = require("./routes/proyectoRoutes");
const tareaRoutes = require("./routes/tareaRoutes");

app.use(express.json());

app.use("/api/empleados", empleadoRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
