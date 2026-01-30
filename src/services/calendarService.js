const CalendarModel = require("../models/calendarModel");
// Importa o Model responsável pelo acesso ao banco de dados

class CalendarService {
    // Busca todos os calendários cadastrados
    static async getAllCalendars() {
        return await CalendarModel.findAll();
    }

    // Cria um novo calendário
    static async createCalendar(calendar) {
        return await CalendarModel.create({
            nome_exibicao: calendar.nome_exibicao,
            cor: calendar.cor,
            criado_em: calendar.criado_em,
            usuario_id: calendar.usuario_id
        }); // Cria o novo calendário
    }

    // Atualiza informações de um calendário existente
    static async updateCalendar(id_calendario, dadosAtualizados) {
        const updatedRows = await CalendarModel.update(id_calendario, dadosAtualizados);

        if (updatedRows === 0) {
            throw new Error("Calendário não encontrado."); // Caso nenhum calendário tenha sido atualizado
        }

        return updatedRows;
    }

    // Deleta um calendário pelo ID
    static async deleteCalendar(id_calendario) {
        const deletedRows = await CalendarModel.delete(id_calendario);

        if (deletedRows === 0) {
            throw new Error("Calendário não encontrado."); // Caso nenhum calendário tenha sido deletado
        }

        return deletedRows;
    }
}

module.exports = CalendarService;
// Exporta a classe CalendarService para ser usada nos controllers