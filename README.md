# 🔐 **Autenticación de Usuario con JWT en Node.js**

Este proyecto es un sistema de **autenticación de usuarios** utilizando **JSON Web Tokens (JWT)**, implementado desde cero con **Node.js** y **Express**. Permite registrar usuarios, iniciar sesión y proteger rutas con tokens seguros, todo mientras se validan los datos del usuario y se mantiene la seguridad de las sesiones.

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🔧 Instalación y Uso](#-instalación-y-uso)
- [🛡️ Seguridad y Recomendaciones](#-seguridad-y-recomendaciones)

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

## 🔧 Instalación y Uso

1. **Clona el repositorio**:
git clone https://github.com/tu_usuario/tu_repositorio.git

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

4. **Inicia el servidor**:
npm start

5. **Prueba las rutas**:
Puedes probar las rutas usando **Postman** o cualquier cliente HTTP.