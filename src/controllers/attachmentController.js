const AttachmentService = require('../services/attachmentService');
// Importa o serviço que contém a lógica de negócio para manipular anexos

class AttachmentController {
    static async getAll(req, res) {
        try {
            const attachments = await AttachmentService.getAllAttachments();
            res.json(attachments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'Arquivo é obrigatório no campo "file".' });
            }

            const payload = {
                nome_original: req.file.originalname,
                nome_arquivo: req.file.filename,
                mime_type: req.file.mimetype,
                tamanho_bytes: req.file.size,
                caminho: `uploads/attachments/${req.file.filename}`,
                id_compromisso: req.body.id_compromisso
            };

            const attachmentId = await AttachmentService.createAttachment(payload);

            res.status(201).json({
                id_anexos: attachmentId,
                ...payload
            });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedRows = await AttachmentService.updateAttachment(
                req.params.id,
                req.body
            );
            if (updatedRows === 0) {
                return res.status(404).json({ error: "Anexo não encontrado." });
            }
            res.json({ message: "Anexo atualizado com sucesso." }); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedRows = await AttachmentService.deleteAttachment(
                req.params.id //Pega o ID da URL
            );
            if (deletedRows === 0) {
                return res.status(404).json({ error: "Anexo não encontrado." });
            }
            res.json({ message: "Anexo deletado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = AttachmentController;
// Exporta o controlador para ser utilizado nas rotas
