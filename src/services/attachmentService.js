const AttachmentModel = require('../models/attachmentModel');

class AttachmentService {
    // Busca todos os anexos cadastrados
    static async getAllAttachments() {
        return await AttachmentModel.findAll();
    }

    // Cria um novo anexo
    static async createAttachment(attachment) {
        if (!attachment.id_compromisso) {
            throw new Error('id_compromisso é obrigatório.');
        }

        return await AttachmentModel.create({
            nome_original: attachment.nome_original,
            nome_arquivo: attachment.nome_arquivo,
            mime_type: attachment.mime_type,
            tamanho_bytes: attachment.tamanho_bytes,
            caminho: attachment.caminho,
            id_compromisso: Number(attachment.id_compromisso)
        });
    }

    // Atualiza um anexo existente
    static async updateAttachment(idAnexo, dadosAtualizados) {
        const updatedRows = await AttachmentModel.update(idAnexo, dadosAtualizados);

        if (updatedRows === 0) {
            throw new Error("Anexo não encontrado."); // Caso nenhum anexo tenha sido atualizado
        }

        return updatedRows;
    }

    // Deleta um anexo pelo ID
    static async deleteAttachment(idAnexo) {
        const deletedRows = await AttachmentModel.delete(idAnexo);

        if (deletedRows === 0) {
            throw new Error("Anexo não encontrado."); // Caso nenhum anexo tenha sido deletado
        }
        
        return deletedRows;
    }
}

module.exports = AttachmentService;
// Exporta a classe AttachmentService para ser usada nos controllers
