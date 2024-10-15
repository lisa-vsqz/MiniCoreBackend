const { addBusinessDays, differenceInBusinessDays } = require("date-fns");
const Tarea = require("../models/Tarea");

let tareas = [
  new Tarea(
    1,
    1,
    1,
    "Desarrollar la página principal",
    "2023-07-01",
    10,
    "En progreso"
  ),
  new Tarea(
    2,
    2,
    2,
    "Diseñar la interfaz de usuario",
    "2023-07-05",
    15,
    "Pendiente"
  ),
  new Tarea(
    3,
    3,
    3,
    "Implementar la base de datos",
    "2023-07-10",
    20,
    "Completado"
  ),
  new Tarea(4, 4, 4, "Configurar el servidor", "2023-07-15", 5, "En progreso"),
  new Tarea(5, 5, 5, "Crear pruebas unitarias", "2023-07-20", 7, "Pendiente"),
  new Tarea(
    6,
    1,
    1,
    "Tarea para el proyecto Udla Website",
    "2024-03-04",
    12,
    "IN_PROGRESS"
  ),
  new Tarea(
    7,
    2,
    2,
    "Desarrollo de la página de inicio",
    "2024-03-05",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(8, 3, 3, "Revisión de cobranzas", "2024-03-06", 10, "IN_PROGRESS"),
  new Tarea(9, 4, 4, "Diseño de interfaz", "2024-03-07", 6, "IN_PROGRESS"),
  new Tarea(
    10,
    5,
    5,
    "Actualización de la app Oki",
    "2024-03-08",
    15,
    "IN_PROGRESS"
  ),
  new Tarea(11, 1, 1, "Configuración inicial", "2024-03-11", 5, "IN_PROGRESS"),
  new Tarea(12, 2, 2, "Corrección de errores", "2024-03-12", 7, "IN_PROGRESS"),
  new Tarea(13, 3, 3, "Finalización de tareas", "2024-03-13", 9, "IN_PROGRESS"),
  new Tarea(
    14,
    4,
    4,
    "Optimización del diseño",
    "2024-03-14",
    4,
    "IN_PROGRESS"
  ),
  new Tarea(15, 5, 5, "Pruebas finales", "2024-03-15", 11, "IN_PROGRESS"),
  new Tarea(16, 1, 1, "Revisión de código", "2024-03-18", 14, "IN_PROGRESS"),
  new Tarea(
    17,
    2,
    2,
    "Preparación de documentación",
    "2024-03-19",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(18, 3, 3, "Pruebas de usuario", "2024-03-20", 12, "IN_PROGRESS"),
  new Tarea(
    19,
    4,
    4,
    "Implementación de feedback",
    "2024-03-21",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(
    20,
    5,
    5,
    "Entrega de la aplicación",
    "2024-03-22",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    21,
    1,
    1,
    "Revisión de rendimiento",
    "2024-03-25",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(22, 2, 2, "Ajustes finales", "2024-03-26", 5, "IN_PROGRESS"),
  new Tarea(
    23,
    3,
    3,
    "Configuración de servidores",
    "2024-03-27",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    24,
    4,
    4,
    "Desarrollo de nuevas funciones",
    "2024-03-28",
    13,
    "IN_PROGRESS"
  ),
  new Tarea(25, 5, 5, "Análisis de resultados", "2024-03-29", 8, "IN_PROGRESS"),
  new Tarea(
    26,
    1,
    1,
    "Pruebas de integración",
    "2024-04-01",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    27,
    2,
    2,
    "Actualización de seguridad",
    "2024-04-02",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(
    28,
    3,
    3,
    "Revisión de usabilidad",
    "2024-04-03",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    29,
    4,
    4,
    "Desarrollo de informes",
    "2024-04-04",
    14,
    "IN_PROGRESS"
  ),
  new Tarea(30, 5, 5, "Mejora de la interfaz", "2024-04-05", 7, "IN_PROGRESS"),
  new Tarea(
    31,
    1,
    1,
    "Mantenimiento de la app",
    "2024-04-08",
    12,
    "IN_PROGRESS"
  ),
  new Tarea(
    32,
    2,
    2,
    "Ajustes de funcionalidad",
    "2024-04-09",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    33,
    3,
    3,
    "Desarrollo de nuevas características",
    "2024-04-10",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    34,
    4,
    4,
    "Optimización de procesos",
    "2024-04-11",
    15,
    "IN_PROGRESS"
  ),
  new Tarea(
    35,
    5,
    5,
    "Evaluación de rendimiento",
    "2024-04-12",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    36,
    1,
    1,
    "Implementación de feedback",
    "2024-04-15",
    13,
    "IN_PROGRESS"
  ),
  new Tarea(
    37,
    2,
    2,
    "Actualización de módulos",
    "2024-04-16",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(
    38,
    3,
    3,
    "Pruebas de estabilidad",
    "2024-04-17",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    39,
    4,
    4,
    "Desarrollo de funcionalidades adicionales",
    "2024-04-18",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(
    40,
    5,
    5,
    "Preparación para lanzamiento",
    "2024-04-19",
    12,
    "IN_PROGRESS"
  ),
  new Tarea(41, 1, 1, "Pruebas de aceptación", "2024-04-22", 8, "IN_PROGRESS"),
  new Tarea(
    42,
    2,
    2,
    "Mejora de la documentación",
    "2024-05-01",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(43, 3, 3, "Revisión de seguridad", "2024-05-02", 9, "IN_PROGRESS"),
  new Tarea(
    44,
    4,
    4,
    "Desarrollo de reportes",
    "2024-05-03",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    45,
    5,
    5,
    "Optimización de rendimiento",
    "2024-05-06",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(46, 1, 1, "Finalización de tareas", "2024-05-07", 7, "IN_PROGRESS"),
  new Tarea(
    47,
    2,
    2,
    "Desarrollo de nuevos módulos",
    "2024-05-08",
    12,
    "IN_PROGRESS"
  ),
  new Tarea(
    48,
    3,
    3,
    "Configuración de entorno",
    "2024-05-09",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    49,
    4,
    4,
    "Preparación para la prueba final",
    "2024-05-10",
    14,
    "IN_PROGRESS"
  ),
  new Tarea(50, 5, 5, "Pruebas finales", "2024-05-13", 6, "IN_PROGRESS"),
  new Tarea(51, 1, 1, "Ajustes y correcciones", "2024-05-14", 9, "IN_PROGRESS"),
  new Tarea(52, 2, 2, "Documentación final", "2024-05-15", 7, "IN_PROGRESS"),
  new Tarea(
    53,
    3,
    3,
    "Entrega de versión beta",
    "2024-05-16",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    54,
    4,
    4,
    "Desarrollo de nuevas funcionalidades",
    "2024-05-17",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    55,
    5,
    5,
    "Evaluación del sistema",
    "2024-05-20",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    56,
    1,
    1,
    "Finalización de la versión",
    "2024-05-21",
    5,
    "IN_PROGRESS"
  ),
  new Tarea(57, 2, 2, "Revisión final", "2024-05-22", 12, "IN_PROGRESS"),
  new Tarea(
    58,
    3,
    3,
    "Preparación para despliegue",
    "2024-05-23",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(
    59,
    4,
    4,
    "Lanzamiento del producto",
    "2024-05-24",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    60,
    5,
    5,
    "Soporte post-lanzamiento",
    "2024-05-27",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    61,
    1,
    1,
    "Evaluación post-lanzamiento",
    "2024-05-28",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    62,
    2,
    2,
    "Optimización de rendimiento",
    "2024-05-29",
    15,
    "IN_PROGRESS"
  ),
  new Tarea(
    63,
    3,
    3,
    "Implementación de mejoras",
    "2024-05-30",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(64, 4, 4, "Pruebas continuas", "2024-06-03", 6, "IN_PROGRESS"),
  new Tarea(
    65,
    5,
    5,
    "Mantenimiento y soporte",
    "2024-06-04",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(66, 1, 1, "Ajustes finales", "2024-06-05", 10, "IN_PROGRESS"),
  new Tarea(67, 2, 2, "Revisión continua", "2024-06-06", 7, "IN_PROGRESS"),
  new Tarea(
    68,
    3,
    3,
    "Actualización de módulos",
    "2024-06-07",
    12,
    "IN_PROGRESS"
  ),
  new Tarea(
    69,
    4,
    4,
    "Desarrollo de nuevas características",
    "2024-06-10",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    70,
    5,
    5,
    "Evaluación de usabilidad",
    "2024-06-11",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    71,
    1,
    1,
    "Optimización del sistema",
    "2024-06-12",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    72,
    2,
    2,
    "Preparación para actualización",
    "2024-06-13",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(
    73,
    3,
    3,
    "Despliegue de actualización",
    "2024-06-14",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    74,
    4,
    4,
    "Pruebas post-actualización",
    "2024-06-17",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    75,
    5,
    5,
    "Evaluación post-actualización",
    "2024-06-18",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    76,
    1,
    1,
    "Soporte y mantenimiento",
    "2024-06-19",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(77, 2, 2, "Optimización continua", "2024-06-20", 12, "IN_PROGRESS"),
  new Tarea(78, 3, 3, "Desarrollo de informes", "2024-06-21", 9, "IN_PROGRESS"),
  new Tarea(
    79,
    4,
    4,
    "Implementación de feedback",
    "2024-06-24",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    80,
    5,
    5,
    "Finalización de la versión",
    "2024-06-25",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    81,
    1,
    1,
    "Preparación para lanzamiento",
    "2024-06-26",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(82, 2, 2, "Revisión final", "2024-06-27", 10, "IN_PROGRESS"),
  new Tarea(
    83,
    3,
    3,
    "Lanzamiento del producto",
    "2024-06-28",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    84,
    4,
    4,
    "Soporte post-lanzamiento",
    "2024-07-01",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(
    85,
    5,
    5,
    "Evaluación post-lanzamiento",
    "2024-07-02",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    86,
    1,
    1,
    "Ajustes y correcciones",
    "2024-07-03",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(87, 2, 2, "Documentación final", "2024-07-04", 8, "IN_PROGRESS"),
  new Tarea(
    88,
    3,
    3,
    "Entrega de versión beta",
    "2024-07-05",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    89,
    4,
    4,
    "Desarrollo de nuevas funcionalidades",
    "2024-07-08",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(
    90,
    5,
    5,
    "Evaluación del sistema",
    "2024-07-09",
    10,
    "IN_PROGRESS"
  ),
  new Tarea(
    91,
    1,
    1,
    "Finalización de la versión",
    "2024-07-10",
    7,
    "IN_PROGRESS"
  ),
  new Tarea(92, 2, 2, "Revisión final", "2024-07-11", 12, "IN_PROGRESS"),
  new Tarea(
    93,
    3,
    3,
    "Preparación para despliegue",
    "2024-07-12",
    8,
    "IN_PROGRESS"
  ),
  new Tarea(
    94,
    4,
    4,
    "Lanzamiento del producto",
    "2024-07-15",
    14,
    "IN_PROGRESS"
  ),
  new Tarea(
    95,
    5,
    5,
    "Soporte post-lanzamiento",
    "2024-07-16",
    6,
    "IN_PROGRESS"
  ),
  new Tarea(
    96,
    1,
    1,
    "Evaluación post-lanzamiento",
    "2024-07-17",
    9,
    "IN_PROGRESS"
  ),
  new Tarea(
    97,
    2,
    2,
    "Optimización de rendimiento",
    "2024-07-18",
    15,
    "IN_PROGRESS"
  ),
  new Tarea(
    98,
    3,
    3,
    "Implementación de mejoras",
    "2024-07-19",
    11,
    "IN_PROGRESS"
  ),
  new Tarea(99, 4, 4, "Pruebas continuas", "2024-07-22", 6, "IN_PROGRESS"),
  new Tarea(
    100,
    5,
    5,
    "Mantenimiento y soporte",
    "2024-07-23",
    9,
    "IN_PROGRESS"
  ),
];

const getTareas = (req, res) => {
  res.json(tareas);
};

const getTareaById = (req, res) => {
  const tarea = tareas.find((tar) => tar.id === parseInt(req.params.id));
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

const createTarea = (req, res) => {
  const {
    empleado_asignado,
    proyecto_asignado,
    descripcion,
    fecha_inicio,
    dias_estimados,
    estado,
  } = req.body;
  const newTarea = new Tarea(
    tareas.length + 1,
    empleado_asignado,
    proyecto_asignado,
    descripcion,
    fecha_inicio,
    dias_estimados,
    estado
  );
  tareas.push(newTarea);
  res.status(201).json(newTarea);
};

const updateTarea = (req, res) => {
  const tarea = tareas.find((tar) => tar.id === parseInt(req.params.id));
  if (tarea) {
    const {
      empleado_asignado,
      proyecto_asignado,
      descripcion,
      fecha_inicio,
      dias_estimados,
      estado,
    } = req.body;
    tarea.empleado_asignado = empleado_asignado;
    tarea.proyecto_asignado = proyecto_asignado;
    tarea.descripcion = descripcion;
    tarea.fecha_inicio = fecha_inicio;
    tarea.dias_estimados = dias_estimados;
    tarea.estado = estado;
    res.json(tarea);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

const deleteTarea = (req, res) => {
  const index = tareas.findIndex((tar) => tar.id === parseInt(req.params.id));
  if (index !== -1) {
    tareas.splice(index, 1);
    res.json({ message: "Tarea eliminada" });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

const getTareasAtrasadas = (req, res) => {
  const { fecha_inicio_usuario, fecha_fin_usuario } = req.query;

  // Convertir las fechas de entrada a objetos Date
  const fechaInicioUsuario = new Date(fecha_inicio_usuario);
  const fechaFinUsuario = new Date(fecha_fin_usuario);

  // Filtrar tareas en estado IN_PROGRESS
  const tareasInProgress = tareas.filter(
    (tarea) => tarea.estado === "IN_PROGRESS"
  );

  // Calcular fecha final para cada tarea
  const tareasConFechasCalculadas = tareasInProgress.map((tarea) => {
    const fechaInicio = new Date(tarea.fecha_inicio);
    const fechaFinalCalculada = addBusinessDays(
      fechaInicio,
      tarea.dias_estimados
    );

    return {
      ...tarea,
      fecha_final_calculada: fechaFinalCalculada,
    };
  });

  // Filtrar tareas dentro del rango de fechas proporcionado por el usuario
  const tareasEnRango = tareasConFechasCalculadas.filter((tarea) => {
    return (
      tarea.fecha_final_calculada >= fechaInicioUsuario &&
      tarea.fecha_final_calculada <= fechaFinUsuario
    );
  });

  // Calcular días atrasados para las tareas filtradas
  const tareasConDiasAtrasados = tareasEnRango.map((tarea) => {
    const diasAtrasados = differenceInBusinessDays(
      fechaFinUsuario,
      tarea.fecha_final_calculada
    );

    return {
      ...tarea,
      dias_atrasados: diasAtrasados > 0 ? diasAtrasados : 0,
    };
  });

  res.json(tareasConDiasAtrasados);
};

module.exports = {
  getTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
  getTareasAtrasadas,
};
