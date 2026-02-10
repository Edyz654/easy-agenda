const express = require('express');

const Guests_commitmentController = require('../controllers/guests_commitmentController');
// Importa o controller que gerencia as requisições relacionadas aos convidados/compromisso

const router = express.Router();

// Rota para listar todos os convidados de um compromisso
router.get('/:id_compromisso', Guests_commitmentController.getAll);

// Rota para adicionar um convidado existente a um compromisso
router.post('/', Guests_commitmentController.addGuest);

// Rota para remover um convidado de um compromisso
router.delete('/:id_compromisso/:id_usuario', Guests_commitmentController.removeGuest);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal