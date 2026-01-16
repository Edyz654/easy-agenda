const express = require('express');

const calendarController = require('../controllers/calendarController');
// Importa o controller que gerencia as requisições relacionadas ao calendário

const router = express.Router();

// Rota para listar todos os eventos do calendário
router.get('/', calendarController.getAll);