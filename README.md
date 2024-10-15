# AR MiniCore API
## Descripción
AR MiniCore API es una API RESTful implementada con Node.js y Express para gestionar tareas relacionadas con empleados y proyectos. Utiliza el patrón Modelo-Vista-Controlador (MVC) para organizar la lógica del negocio y facilitar la administración de las entidades de datos.

## Tecnologías y Librerías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework web para Node.js que facilita la creación de aplicaciones web.
Cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
Date-fns: Biblioteca para manipulación y formateo de fechas.
## Estructura del Proyecto
El proyecto está organizado siguiendo el patrón Modelo-Vista-Controlador (MVC):

### Modelo: 
Define las estructuras de datos y las propiedades de las entidades. Está representado por las clases en models.
### Vista: 
En el contexto de una API, la vista es la respuesta HTTP que se envía al cliente. Se maneja a través de los controladores que formatean las respuestas.
### Controlador: 
Contiene la lógica de negocio, maneja las solicitudes del cliente y coordina las respuestas con los modelos. Los controladores están en la carpeta controllers.
### Rutas: 
Define los endpoints de la API y mapea las solicitudes a los controladores correspondientes. Las rutas están en la carpeta routes.
## Instalación
Clona el repositorio:

bash
### Copiar código
git clone https://github.com/Ariel454/ar_minicore_api.git

cd ar_minicore_api

## Instala las dependencias:

bash

### Copiar código

npm install

## Configuración de la Base de Datos
Para replicar la estructura de la base de datos, ejecuta los siguientes comandos SQL:

sql
Copiar código
CREATE TABLE Empleado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE Proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE Tarea (
    id SERIAL PRIMARY KEY,
    empleado_asignado INT NOT NULL,
    proyecto_asignado INT NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    dias_estimados INT NOT NULL,
    estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (empleado_asignado) REFERENCES Empleado(id),
    FOREIGN KEY (proyecto_asignado) REFERENCES Proyectos(id)
);

INSERT INTO Empleado (nombre) VALUES
('Martin Perez'),
('Juan Lopez'),
('Ariel Diaz'),
('Laura Gonzalez'),
('Pedro Ramirez');

INSERT INTO Proyectos (nombre) VALUES
('Udla Website'),
('Supermaxi App'),
('Cigarra Pedidos'),
('Udla Parqueos'),
('Oki App'),
('Proyecto Hanaska');


INSERT INTO Tarea (empleado_asignado, proyecto_asignado, descripcion, fecha_inicio, dias_estimados, estado) VALUES
(1, 1, 'Tarea para el proyecto Udla Website', '2024-03-04', 12, 'IN_PROGRESS'),
(2, 2, 'Desarrollo de la página de inicio', '2024-03-05', 8, 'IN_PROGRESS'),
(3, 3, 'Revisión de cobranzas', '2024-03-06', 10, 'IN_PROGRESS'),
(4, 4, 'Diseño de interfaz', '2024-03-07', 6, 'IN_PROGRESS'),
(5, 5, 'Actualización de la app Oki', '2024-03-08', 15, 'IN_PROGRESS'),
(1, 1, 'Configuración inicial', '2024-03-11', 5, 'IN_PROGRESS'),
(2, 2, 'Corrección de errores', '2024-03-12', 7, 'IN_PROGRESS'),
(3, 3, 'Finalización de tareas', '2024-03-13', 9, 'IN_PROGRESS'),
(4, 4, 'Optimización del diseño', '2024-03-14', 4, 'IN_PROGRESS'),
(5, 5, 'Pruebas finales', '2024-03-15', 11, 'IN_PROGRESS'),
(1, 1, 'Revisión de código', '2024-03-18', 14, 'IN_PROGRESS'),
(2, 2, 'Preparación de documentación', '2024-03-19', 8, 'IN_PROGRESS'),
(3, 3, 'Pruebas de usuario', '2024-03-20', 12, 'IN_PROGRESS'),
(4, 4, 'Implementación de feedback', '2024-03-21', 6, 'IN_PROGRESS'),
(5, 5, 'Entrega de la aplicación', '2024-03-22', 10, 'IN_PROGRESS'),
(1, 1, 'Revisión de rendimiento', '2024-03-25', 7, 'IN_PROGRESS'),
(2, 2, 'Ajustes finales', '2024-03-26', 5, 'IN_PROGRESS'),
(3, 3, 'Configuración de servidores', '2024-03-27', 9, 'IN_PROGRESS'),
(4, 4, 'Desarrollo de nuevas funciones', '2024-03-28', 13, 'IN_PROGRESS'),
(5, 5, 'Análisis de resultados', '2024-03-29', 8, 'IN_PROGRESS'),
(1, 1, 'Pruebas de integración', '2024-04-01', 11, 'IN_PROGRESS'),
(2, 2, 'Actualización de seguridad', '2024-04-02', 6, 'IN_PROGRESS'),
(3, 3, 'Revisión de usabilidad', '2024-04-03', 10, 'IN_PROGRESS'),
(4, 4, 'Desarrollo de informes', '2024-04-04', 14, 'IN_PROGRESS'),
(5, 5, 'Mejora de la interfaz', '2024-04-05', 7, 'IN_PROGRESS'),
(1, 1, 'Mantenimiento de la app', '2024-04-08', 12, 'IN_PROGRESS'),
(2, 2, 'Ajustes de funcionalidad', '2024-04-09', 8, 'IN_PROGRESS'),
(3, 3, 'Desarrollo de nuevas características', '2024-04-10', 9, 'IN_PROGRESS'),
(4, 4, 'Optimización de procesos', '2024-04-11', 15, 'IN_PROGRESS'),
(5, 5, 'Evaluación de rendimiento', '2024-04-12', 10, 'IN_PROGRESS'),
(1, 1, 'Implementación de feedback', '2024-04-15', 13, 'IN_PROGRESS'),
(2, 2, 'Actualización de módulos', '2024-04-16', 6, 'IN_PROGRESS'),
(3, 3, 'Pruebas de estabilidad', '2024-04-17', 11, 'IN_PROGRESS'),
(4, 4, 'Desarrollo de funcionalidades adicionales', '2024-04-18', 7, 'IN_PROGRESS'),
(5, 5, 'Preparación para lanzamiento', '2024-04-19', 12, 'IN_PROGRESS'),
(1, 1, 'Pruebas de aceptación', '2024-04-22', 8, 'IN_PROGRESS'),
(2, 2, 'Mejora de la documentación', '2024-05-01', 6, 'IN_PROGRESS'),
(3, 3, 'Revisión de seguridad', '2024-05-02', 9, 'IN_PROGRESS'),
(4, 4, 'Desarrollo de reportes', '2024-05-03', 11, 'IN_PROGRESS'),
(5, 5, 'Optimización de rendimiento', '2024-05-06', 10, 'IN_PROGRESS'),
(1, 1, 'Finalización de tareas', '2024-05-07', 7, 'IN_PROGRESS'),
(2, 2, 'Desarrollo de nuevos módulos', '2024-05-08', 12, 'IN_PROGRESS'),
(3, 3, 'Configuración de entorno', '2024-05-09', 8, 'IN_PROGRESS'),
(4, 4, 'Preparación para la prueba final', '2024-05-10', 14, 'IN_PROGRESS'),
(5, 5, 'Pruebas finales', '2024-05-13', 6, 'IN_PROGRESS'),
(1, 1, 'Ajustes y correcciones', '2024-05-14', 9, 'IN_PROGRESS'),
(2, 2, 'Documentación final', '2024-05-15', 7, 'IN_PROGRESS'),
(3, 3, 'Entrega de versión beta', '2024-05-16', 8, 'IN_PROGRESS'),
(4, 4, 'Desarrollo de nuevas funcionalidades', '2024-05-17', 11, 'IN_PROGRESS'),
(5, 5, 'Evaluación del sistema', '2024-05-20', 10, 'IN_PROGRESS'),
(1, 1, 'Finalización de la versión', '2024-05-21', 5, 'IN_PROGRESS'),
(2, 2, 'Revisión final', '2024-05-22', 12, 'IN_PROGRESS'),
(3, 3, 'Preparación para despliegue', '2024-05-23', 7, 'IN_PROGRESS'),
(4, 4, 'Entrega del proyecto', '2024-05-24', 9, 'IN_PROGRESS'),
(5, 5, 'Revisión post-lanzamiento', '2024-05-27', 10, 'IN_PROGRESS'),
(2, 1, 'Revisión de código final', '2024-06-03', 5, 'DONE'),
(3, 2, 'Pruebas de usabilidad completas', '2024-06-04', 7, 'DONE'),
(4, 3, 'Finalización de desarrollo', '2024-06-05', 10, 'DONE'),
(5, 4, 'Ajustes de diseño completados', '2024-06-06', 4, 'DONE'),
(1, 5, 'Documentación completa', '2024-06-07', 6, 'DONE'),
(2, 3, 'Pruebas de integración finalizadas', '2024-06-10', 8, 'DONE'),
(3, 4, 'Desarrollo de informes finalizado', '2024-06-11', 12, 'DONE'),
(4, 5, 'Desarrollo de funcionalidades completado', '2024-06-12', 9, 'DONE'),
(1, 2, 'Fun Spec App', '2024-03-10', 15, 'IN_PROGRESS'),
(2, 1, 'Homepage', '2024-05-10', 2, 'IN_PROGRESS'),
(3, 3, 'Cobranzas', '2023-05-27', 7, 'DONE'),
(2, 2, 'Diseño Splash Screen', '2024-06-13', 1, 'IN_PROGRESS'),
(1, 1, 'Header', '2024-02-12', 1, 'IN_PROGRESS'),
(3, 4, 'Login Pedidos', '2024-06-19', 1, 'DONE');


select * from empleado e ;
select * from proyectos p; 
select * from tarea t ;

## Esquema de la base de datos

![image](https://github.com/user-attachments/assets/f2ddb0e3-74f7-44c2-a4ab-619941d350c7)


## Implementación del Patrón MVC
## Modelos
Empleado: Define las propiedades del modelo de empleado.
Proyectos: Define las propiedades del modelo de proyecto.
Tarea: Define las propiedades del modelo de tarea, incluyendo referencias a empleados y proyectos.
## Controladores
Empleado Controller: Maneja las operaciones CRUD para los empleados.
Proyectos Controller: Maneja las operaciones CRUD para los proyectos.
Tarea Controller: Maneja las operaciones CRUD para las tareas.
## Rutas
Empleado Routes: Define las rutas para las operaciones CRUD sobre empleados.
Proyectos Routes: Define las rutas para las operaciones CRUD sobre proyectos.
Tarea Routes: Define las rutas para las operaciones CRUD sobre tareas.
## Ejemplos de Código
Modelo de Empleado (models/Empleado.js):

### javascript
### Copiar código
class Empleado {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

module.exports = Empleado;
Controlador de Empleado (controllers/empleadoController.js):

javascript
Copiar código
const Empleado = require('../models/Empleado');

let empleados = [
    new Empleado(1, 'Martin Perez'),
    new Empleado(2, 'Juan Lopez'),
    // ... (otros empleados)
];

const getEmpleados = (req, res) => {
    res.json(empleados);
};

Rutas de Empleado (routes/empleadoRoutes.js):

### javascript
### Copiar código
const express = require('express');
const router = express.Router();
const {
    getEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
} = require('../controllers/empleadoController');

router.get('/', getEmpleados);
router.get('/:id', getEmpleadoById);
router.post('/', createEmpleado);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

module.exports = router;
## Ejecución del Servidor
Para iniciar el servidor, ejecuta el siguiente comando:

bash

### Copiar código

node index.js
El servidor escuchará en el puerto 3000 por defecto. Puedes realizar solicitudes a los endpoints definidos en las rutas para probar la funcionalidad de la API.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio y envía un pull request con tus mejoras o correcciones.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.

¡Eso es todo! Este README.md proporciona una visión general completa de la API, incluyendo las tecnologías utilizadas, la estructura del proyecto, y cómo implementar el patrón MVC.
