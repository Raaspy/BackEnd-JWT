# 🔐 **Autenticación de Usuario con JWT en Node.js**

Este proyecto es un sistema de **autenticación de usuarios** utilizando **JSON Web Tokens (JWT)**, implementado desde cero con **Node.js** y **Express**. Permite registrar usuarios, iniciar sesión y proteger rutas con tokens seguros, todo mientras se validan los datos del usuario y se mantiene la seguridad de las sesiones.

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🛡️ Seguridad y Recomendaciones](#-seguridad-y-recomendaciones)
- [🔧 Instalación y Uso](#-instalación-y-uso)

---

## ✨ Características

- **Registro de usuario**: Crea cuentas con validación de email, nombre y contraseña.
- **Login de usuario**: Genera un token JWT tras la autenticación exitosa.
- **Protección de rutas**: Middleware que valida el token JWT para asegurar rutas protegidas.
- **Revalidación de token**: Generación de un nuevo token sin necesidad de volver a iniciar sesión.
- **Manejo de errores**: Respuestas detalladas para validaciones y errores de autenticación.

---

## 🛠️ Tecnologías Utilizadas

- ⚙️ **Node.js** – Motor principal del backend.
- 🛡️ **Express.js** – Framework para la creación de rutas y manejo de peticiones.
- 🧳 **PostgreSQL** – Base de datos relacional para almacenamiento de usuarios.
- 🔐 **bcryptjs** – Hashing de contraseñas para mayor seguridad.
- 🔑 **jsonwebtoken** – Generación y validación de tokens JWT.
- 🛠️ **express-validator** – Validación de entradas de usuario (email y contraseña).
- 🌱 **dotenv** – Manejo de variables de entorno.

---

## 🛡️ Seguridad y Recomendaciones
Este sistema utiliza JWT para asegurar las sesiones de los usuarios.
> Asegúrate de proteger adecuadamente tu clave secreta (SECRET_KEY_JWY) y otras variables sensibles. Si planeas usar este sistema en un entorno de producción, considera la implementación de medidas adicionales, como la **revocación de tokens** o **tokens de refresco.**

---

## 🔧 Instalación y Uso

1. **Clona el repositorio**:
git clone https://github.com/Raaspy/BackEnd-JWT.git

2. **Instala las dependencias**:
npm install

3. **Configura las variables de entorno (.env)**:
- PORT
- DB_NAME
- DB_USER
- DB_PASS
- DB_HOST
- DB_PORT
- SECRET_KEY_JWY
- JWT_EXPIRATION

4. **Crea la tabla de base de datos (PostgreSQL)**:
Para usar este proyecto, es necesario que tu base de datos contenga una tabla llamada **usuarios** con los siguientes atributos:

- **id**: Clave primaria, autoincremental.
- **name**: Nombre del usuario.
- **email**: (Único), correo utilizado para la autenticación.
- **password**: Contraseña cifrada del usuario.
- **created_at**: Fecha de creación del usuario.

Asegúrate de que la tabla esté configurada correctamente para que el sistema funcione de manera adecuada.  
En PostgreSQL, la consulta SQL para crear la tabla podría ser algo como:

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5. **Inicia el servidor**:
npm start

6. **Prueba las rutas**:
Puedes probar las rutas usando **Postman** o cualquier cliente HTTP.
