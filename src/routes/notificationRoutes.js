const express = require('express');

const NotificationController = require('../controllers/notificationController');
// Importa o controller que gerencia as requisições relacionadas a notificações

const router = express.Router();

// Rota para listar todas as notificações
router.get('/', NotificationController.getAll);

// Rota para criar uma nova notificação
router.post('/', NotificationController.create);

// Rota para atualizar uma notificação existente
router.put('/:id', NotificationController.update);

// Rota para deletar uma notificação
router.delete('/:id', NotificationController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal