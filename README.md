DISEÑO Y DESARROLLO DE SERVICIOS WEB – CASO 
GA7-220501096-AA5-EV01




John Edison Pérez Henao
Carlos Ivan López H



Análisis y Desarrollo del software
SENA
Ficha 2977347



Instructor
Juan Carlos Quintero



7 de Febrero de 2025


Proyecto: Servicio web de registro e inicio de sesión

Contenido:
- `app.js` - punto de entrada del servidor
- `routes/auth.js` - endpoints `register` y `login` (con comentarios)
- `users.json` - almacenamiento simple de usuarios (JSON)
- `package.json` - dependencias y scripts

Instalación y ejecución:

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar servidor:

```bash
npm start
```

El servidor escuchará por defecto en http://localhost:3000

Pruebas con `curl`:

Registro:

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"alumno","password":"contraseña123"}'
```

Inicio de sesión:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"alumno","password":"contraseña123"}'
```

Versionamiento y entrega:

- Inicializar git en la carpeta del proyecto: `git init`.
- Crear un repositorio remoto (GitHub/GitLab) y subir el código.
- Comprimir la carpeta con el nombre solicitado: `NOMBRE_APELLIDO_AA5_EV01.zip`.
- Entregar la carpeta comprimida y el enlace del repositorio.

Notas:
- El proyecto usa `users.json` como almacenamiento simple para la evidencia. En producción se debe usar una base de datos.
- El código contiene comentarios explicativos solicitados en la evidencia.
