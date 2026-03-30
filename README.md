DISEÑO Y DESARROLLO DE SERVICIOS WEB – CASO 
GA7-220501096-AA5-EV01




John Edison Pérez Henao




Análisis y Desarrollo del software
SENA
Ficha 3118298



Instructor
David Fernando Guerrero Vanegas



29 de Marzo de 2026


Proyecto: Servicio web de registro e inicio de sesión

## Evidencia de desempeño

### Introducción

Este documento describe el desarrollo de un servicio web para registro e inicio de sesión, basado en el componente formativo “Construcción de API”. El objetivo es implementar un servicio que reciba usuario y contraseña, verifique las credenciales y devuelva una respuesta clara cuando la autenticación sea correcta o cuando falle.

### Descripción del servicio

El servicio está construido con Node.js y Express. Se utiliza un archivo `users.json` como almacenamiento simple para registrar usuarios de prueba. El servidor ofrece una interfaz gráfica de prueba en `public/index.html` y dos endpoints principales para el registro y el inicio de sesión.

Archivos principales:
- `app.js` - configuración del servidor y rutas.
- `routes/auth.js` - endpoints de autenticación.
- `users.json` - almacenamiento local de usuarios.
- `public/index.html` - formulario de prueba en el navegador.
- `package.json` - dependencias y scripts.

### Servicios implementados

#### Registro de usuario
- Endpoint: `POST /api/auth/register`
- Recibe `username` y `password` en el body de la petición.
- Valida que ambos campos estén presentes.
- Comprueba que el usuario no exista previamente.
- Hashea la contraseña con `bcrypt` antes de guardarla.
- Responde con `201` y mensaje `Registro exitoso` cuando se crea el usuario.

#### Inicio de sesión
- Endpoint: `POST /api/auth/login`
- Recibe `username` y `password` en el body de la petición.
- Valida que ambos campos estén presentes.
- Busca el usuario registrado en `users.json`.
- Compara la contraseña enviada con la contraseña cifrada usando `bcrypt.compare`.
- Responde con `Autenticación satisfactoria` cuando la credencial es correcta.
- Si el usuario no existe o la contraseña es incorrecta, devuelve `401` con `Error en la autenticación`.

### Validaciones realizadas

El servicio aplica las siguientes validaciones:
- Verifica la existencia de `username` y `password` en todas las peticiones.
- Evita registros de usuarios duplicados.
- Devuelve errores claros y apropiados con códigos HTTP:
  - `400` cuando faltan datos obligatorios.
  - `409` cuando el usuario ya existe.
  - `401` cuando la autenticación falla.
- Protege la contraseña en el almacenamiento usando hashing.

### Pruebas y uso

#### Instalar dependencias
```bash
npm install
```

#### Iniciar servidor
```bash
npm start
```

Accede al servicio en:
- `http://localhost:3000`

#### Probar en Postman

Registro:
- Método: `POST`
- URL: `http://localhost:3000/api/auth/register`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "username": "alumno",
  "password": "contraseña123"
}
```

Inicio de sesión:
- Método: `POST`
- URL: `http://localhost:3000/api/auth/login`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "username": "alumno",
  "password": "contraseña123"
}
```

### Conclusión

El proyecto cumple con la evidencia solicitada: un servicio web para registro e inicio de sesión con validaciones correctas, manejo de usuarios y protección básica de contraseñas. Además, ofrece una interfaz de prueba en el navegador y se puede verificar con Postman.

Como mejora futura, se recomienda migrar el almacenamiento de `users.json` a una base de datos real y agregar controles adicionales de seguridad, como tokens JWT y sesiones autenticadas.

Versionamiento y entrega:

- Inicializar git en la carpeta del proyecto: `git init`.
- Crear un repositorio remoto (GitHub/GitLab) y subir el código.
- Comprimir la carpeta con el nombre solicitado: `NOMBRE_APELLIDO_AA5_EV01.zip`.
- Entregar la carpeta comprimida y el enlace del repositorio.

Notas:
- El proyecto usa `users.json` como almacenamiento simple para la evidencia. En producción se debe usar una base de datos.
- El código contiene comentarios explicativos solicitados en la evidencia.
