const CalendarService = require('../services/calendarService');
// Importa o serviço que contém a lógica de negócio para manipular calendários

class CalendarController {
    static async getAll(req, res) {
        try {
            const calendars = await CalendarService.getAllCalendars();
            res.json(calendars);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const calendar = await CalendarService.createCalendar(req.body);

            res.status(201).json(calendar);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedRows = await CalendarService.updateCalendar(
                req.params.id,
                req.body
            );
            if (updatedRows === 0) {
                return res.status(404).json({ error: "Calendário não encontrado." });
            }
            res.json({ message: "Calendário atualizado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedRows = await CalendarService.deleteCalendar(
                req.params.id //Pega o ID da URL
            );
            if (deletedRows === 0) {
                return res.status(404).json({ error: "Calendário não encontrado." }); // Verifica se o ID é válido
            }
            res.json({ message: "Calendário deletado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CalendarController;
// Exporta a classe CalendarController para ser usada nas rotas