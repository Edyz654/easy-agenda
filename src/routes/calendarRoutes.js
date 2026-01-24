const express = require('express');

const calendarController = require('../controllers/calendarController');
// Importa o controller que gerencia as requisições relacionadas ao calendário

const router = express.Router();

// Rota para listar todos os calendários
router.get('/', calendarController.getAll);

// Rota para criar um novo calendário
router.post('/', calendarController.create);

// Rota para atualizar um calendário existente
router.put('/:id_calendario', calendarController.update);

// Rota para deletar um calendário
router.delete('/:id_calendario', calendarController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal