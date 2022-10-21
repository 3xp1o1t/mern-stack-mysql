# MERN STACK MYSQL

## Ejemplo practico de MERN usando mysql
---
### Requisitos backend:

### Instalar los paquetes:
    - npm i express mysql2 morgan
      - express => REST API
      - mysql2 => MySQL2/promises para consultas a la db.
      - morgan => Ver mensajes del backend en al consola. HTTP Request Logger Middleware

### Configurar package.json
    - "dev": "nodemon server/index.js"  
      - Para no estar reinicando a cada rato el proyecto.
    - "type": "module"                  
      - Para habilitar el uso de import modules.
    - Agregamos el .gitignore
      - https://github.com/github/gitignore/blob/main/Node.gitignore
      - Dentro agregamos el archivo config.js

### Agregar el punto de inicio
    - Crear el archivo index.js y testear un server basico con express.
    - Crear el archivo de ejemplo: config.js.example el cual contendra lo mismo que config.js pero sin los valores reales de produccion.
    - Crear el archivo de ejemplo: db.js.example el cual contiene los datos de conexion igual a db.js pero sin los valores reales.

### Crear archivo de prueba para la conexion con la BD
    - Creamos la carpeta routes
    - Agregamos el archivo index.routes.js
    - Dentro escribimos el codigo para probar la conexion.
    - En index.js agregamos un app.use(indexRouter) para probar el endpoint.

### A partir de este punto, ya solo es programacion del servidor.
<br>

---

# Configuracion del FrontEnd.

  - Crear el proyecto en el mismo directorio
    - npm create vite
    - cd client
    - npm install
    - npm run dev

  - Limpiamos el proyecto
    - Eliminamos assets
    - Eliminamos el contenido de index.css
    - Eliminamos el contenido de app.css
    - Creamos un componente vacio en app.jsx (rfce)

  - Instalar dependencias
    - npm install react-router-dom@6

  - Configurar router 
    - En main.jsx utilizar BrowserRouter como padre de <App />
    - Probar react-router-dom creando una carpeta llamada pages
      - y en su interior crear componenentes de prueba.
      - Posteriormente crear las rutas en app.jsx