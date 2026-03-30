// Servicio de autenticación simple usando Express
// Endpoints:
// POST /api/auth/register  -> registra un usuario (username, password)
// POST /api/auth/login     -> inicia sesión y valida credenciales

const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth');

const app = express();

// Parseo de JSON en peticiones
app.use(express.json());

// Servir archivos estáticos para la interfaz de prueba
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de autenticación montadas en /api/auth
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = app;
