const express = require('express');

const CommitmentController = require('../controllers/commitmentController');
// Importa o controller que gerencia as requisições relacionadas aos convidados/compromisso

const router = express.Router();

// Rota para listar todos os convidados/compromissos
router.get('/', CommitmentController.getAll);

// Rota para criar um novo convidado/compromisso
router.post('/', CommitmentController.create);

// Rota para atualizar um convidado/compromisso existente
router.put('/:id', CommitmentController.update);

// Rota para deletar um convidado/compromisso
router.delete('/:id', CommitmentController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal