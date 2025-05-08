# Backend de Nodejs


Proyecto backend en Node.js + Express con autenticación JWT, base de datos MongoDB (Atlas), y manejo de tareas. Compatible con aplicaciones frontend como React o React Native.

## 🚀 Tecnologías utilizadas

- **Node.js** / **Express.js**
- **MongoDB** con **Mongoose**
- **JWT** (jsonwebtoken)
- **dotenv**
- **Joi** (validación)
- **CORS**
- **bcryptjs** (hash de contraseñas)

## 📁 Estructura del proyecto



## Instalación

Para instalar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias utilizando `npm install`.

## Uso

Para ejecutar el proyecto, utiliza el siguiente comando:

```
npm start
```

| Método | Ruta             | Descripción               |
| ------ | ---------------- | ------------------------- |
| POST   | `/api/register`  | Registrar usuario         |
| POST   | `/api/login`     | Iniciar sesión            |
| GET    | `/api/tasks`     | Listar tareas del usuario |
| POST   | `/api/tasks`     | Crear nueva tarea         |
| GET    | `/api/tasks/:id` | Ver una tarea específica  |
| PUT    | `/api/tasks/:id` | Actualizar tarea          |
| DELETE | `/api/tasks/:id` | Eliminar tarea            |



## To-do futuro
 Refactorizar controladores con servicios

 Documentar API con Swagger

 Pruebas con Jest o Supertest

 Paginación y filtros en tareas


## Contribución

Si quieres contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz tus cambios y haz un commit (`git commit -m "Agregué una nueva funcionalidad"`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Crea un pull request para que tus cambios sean revisados.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más información.
