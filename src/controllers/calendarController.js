const express = require('express');

const CalendarController = require('../controllers/calendarController');
// Importa o controller que gerencia as requisições relacionadas ao calendário

const router = express.Router();

// Rota para listar todos os calendários
router.get('/', CalendarController.getAll);

// Rota para criar um novo calendário
router.post('/', CalendarController.create);

// Rota para atualizar um calendário
router.put('/:id_calendario', CalendarController.update);

// Rota para deletar um calendário
router.delete('/:id_calendario', CalendarController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal