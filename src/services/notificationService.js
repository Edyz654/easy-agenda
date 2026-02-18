const NotificationModel = require('../models/notificationModel');
// Importa o Model responsável pelo acesso ao banco de dados

class NotificationService {
    static createNotFoundError() {
        const error = new Error("Notificação não encontrada.");
        error.status = 404;
        return error;
    }

    // Busca todas as notificações cadastradas
    static async getAllNotifications() {
        return await NotificationModel.findAll();
    }

    // Cria uma nova notificação
    static async createNotification(notification) {
        return await NotificationModel.create({
            id_compromisso: notification.id_compromisso,
            texto: notification.texto
        }); // Cria a nova notificação
    }

    // Atualiza informações de uma notificação existente
    static async updateNotification(id_notificacao, dadosAtualizados) {
        const updatedRows = await NotificationModel.update(id_notificacao, dadosAtualizados);

        if (updatedRows === 0) {
            throw NotificationService.createNotFoundError(); // Caso nenhuma notificação tenha sido atualizada
        }
        
        return updatedRows;
    }

    // Deleta uma notificação pelo ID
    static async deleteNotification(id_notificacao) {
        const deletedRows = await NotificationModel.delete(id_notificacao);

        if (deletedRows === 0) {
            throw NotificationService.createNotFoundError(); // Caso nenhuma notificação tenha sido deletada
        }

        return deletedRows;
    }
}

module.exports = NotificationService;
// Exporta a classe NotificationService para ser usada nos controllers
