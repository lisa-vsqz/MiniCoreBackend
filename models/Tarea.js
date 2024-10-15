class Tarea {
  constructor(
    id,
    empleado_asignado,
    proyecto_asignado,
    descripcion,
    fecha_inicio,
    dias_estimados,
    estado
  ) {
    this.id = id;
    this.empleado_asignado = empleado_asignado;
    this.proyecto_asignado = proyecto_asignado;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.dias_estimados = dias_estimados;
    this.estado = estado;
  }
}

module.exports = Tarea;
