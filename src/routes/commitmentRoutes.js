const express = require('express');

const CommitmentController = require('../controllers/commitmentController');
// Importa o controller que gerencia as requisições relacionadas aos compromissos

const router = express.Router();

// Rota para listar todos os compromissos
router.get('/', CommitmentController.getAll);

// Rota para buscar um compromisso pelo ID
router.get('/:id_compromisso', CommitmentController.getById);

// Rota para criar um novo compromisso
router.post('/', CommitmentController.create);

// Rota para atualizar um compromisso existente
router.put('/:id_compromisso', CommitmentController.update);

// Rota para deletar um compromisso
router.delete('/:id_compromisso', CommitmentController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal