// Rutas de autenticación: registro e inicio de sesión
const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const USERS_FILE = path.join(__dirname, '..', 'users.json');

// Lee el archivo users.json y devuelve el arreglo de usuarios
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Si no existe, devolvemos array vacío
    return [];
  }
}

// Escribe el arreglo de usuarios en users.json
async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

// Registro de usuario
// Recibe { username, password }
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Validaciones básicas
  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan username o password' });
  }

  const users = await readUsers();

  // Comprobar si el usuario ya existe
  const existing = users.find(u => u.username === username);
  if (existing) {
    return res.status(409).json({ error: 'El usuario ya existe' });
  }

  // Hashear la contraseña antes de guardar
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);

  users.push({ username, password: hashed });
  await writeUsers(users);

  return res.status(201).json({ message: 'Registro exitoso' });
});

// Inicio de sesión
// Recibe { username, password }
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan username o password' });
  }

  const users = await readUsers();
  const user = users.find(u => u.username === username);

  // Si no existe el usuario o la contraseña no coincide -> error autenticación
  if (!user) {
    return res.status(401).json({ error: 'Error en la autenticación' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: 'Error en la autenticación' });
  }

  // Autenticación satisfactoria
  return res.json({ message: 'Autenticación satisfactoria' });
});

module.exports = router;
