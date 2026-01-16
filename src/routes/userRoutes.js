const express = require('express');

const UserController = require('../controllers/userController');
// Importa o controller que gerencia as requisições relacionadas a usuários

const router = express.Router();

// Rota para listar todos os usuários
router.get('/', UserController.getAll);

// Rota para criar um novo usuário
router.post('/', UserController.create);

// Rota para atualizar um usuário existente
router.put('/:id_usuario', UserController.update);

// Rota para deletar um usuário
router.delete('/:id_usuario', UserController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal