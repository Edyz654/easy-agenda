const NotificationService = require('../services/notificationService');
// Importa o serviço que contém a lógica de negócio para manipular notificações

class NotificationController {
    static async getAll(req, res) {
        try {
            const notifications = await NotificationService.getAllNotifications();
            res.json(notifications);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req,res) {
        try {
            const notification = await NotificationService.createNotification(req.body);
        
            res.status(201).json(notification);
        } catch (error) {
            res.status(400).json({ error: error.message});
        }
    }

    static async update(req, res) {
        try {
            await NotificationService.updateNotification(
                req.params.id,
                req.body
            );
            res.json({ message: "Notificação atualizada com sucesso."});
        } catch (error) {
            res.status(error.status || 400).json({ error: error.message});
        } 
    }

    static async delete(req, res) {
        try {
            await NotificationService.deleteNotification(
                req.params.id
            );
            res.json({ message : "Notificação deletada com sucesso."});
        } catch (error) {
            res.status(error.status || 400).json({ error: error.message});
        }
    }
}

module.exports = NotificationController;
