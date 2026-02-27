const express = require('express');

const AttachmentController = require('../controllers/attachmentController');

const upload = require('../middlewares/uploadMiddleware');
// Importa o controller que gerencia as requisições relacionadas a anexos

const router = express.Router();

// Rota para listar todos os anexos
router.get('/', AttachmentController.getAll);

// Rota para criar um novo anexo
router.post('/', upload.single('file'), AttachmentController.create);

// Rota para atualizar um anexo existente
router.put('/:id', AttachmentController.update);

// Rota para deletar um anexo
router.delete('/:id', AttachmentController.delete);

module.exports = router;
// Exporta o roteador para ser usado na aplicação principal 
