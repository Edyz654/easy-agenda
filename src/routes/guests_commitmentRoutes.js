const express = require('express');

const Guests_commitmentController = require('../controllers/guests_commitmentController');
// Importa o controller que gerencia as requisições relacionadas aos convidados/compromisso

const router = express.Router();

// Rota para listar todos os convidados/compromissos
router.get('/', Guests_commitmentController.getAll);

// Rota para criar um novo convidado/compromisso
router.post('/', Guests_commitmentController.create);

// Rota para deletar um convidado/compromisso
router.delete('/:id', Guests_commitmentController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal