# Nuxt Todo App

Esta es una aplicación simple para gestionar tus tareas utilizando Nuxt.js y Nuxt UI. 

## Project Overview

La aplicación consta de una sola página (index.vue) con las siguientes características:

- **Formulario de Tareas**: Permite a los usuarios agregar nuevas tareas.
- **Lista de Tareas**: Muestra la lista de tareas con opciones para actualizar o eliminar cada una.
- **Estado de Carga**: Muestra un mensaje de carga mientras se obtienen las tareas..
- **Manejo de Errores**:  Muestra un mensaje de error si la obtención de tareas falla.
- **Usa Ciclo de vida**: onMounted

## Components

## API Endpoints

- `GET http://localhost:8000/api/todos`: Obtiene la lista de tareas.
- `POST http://localhost:8000/api/todos`:  Agrega una nueva tarea.
- `DELETE http://localhost:8000/api/todos/{id}`: Elimina una tarea por su ID.

## Running the App

1. **Instalar Dependencias**:

    ```bash
    npm install
    ```

2. **Iniciar el Servidor**:

    ```bash
    npm run dev
    ```

    Ir a `http://localhost:3000`.


## Development Notes

- Asegure que la API esté ejecutándose en http://localhost:8000 .
- La aplicación utiliza Nuxt UI para mejorar la experiencia de usuario y la apariencia de los componentes.

## License

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---