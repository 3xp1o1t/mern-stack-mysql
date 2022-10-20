# MERN STACK MYSQL

## Ejemplo practico de MERN usando mysql

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


