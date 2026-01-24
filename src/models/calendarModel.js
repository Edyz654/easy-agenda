const db = require('../config/database');
// Importa a conexão pool com o banco de dados

class CalendarModel {
    // Busca todos os calendários
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM calendarios');
        return rows;
    }

// Busca um calendário pelo ID
    static async findById(id_calendario) {
        const [rows] = await db.query('SELECT * FROM calendarios WHERE id = ?',
            [id_calendario]);
        return rows[0];
    }

    // Cria um novo calendário
    static async create(calendar) {
        const { nome_exibicao, cor, criado_em } = calendar;
        const [result] = await db.query('INSERT INTO calendarios (nome_exibicao, cor, criado_em) VALUES (?,?,?)', [nome_exibicao, cor, criado_em]);
        return result.insertId; // Retorna o ID do calendário criado
    }

    // Atualiza um calendário existente
    static async update(id, calendar) {
        const { nome_exibicao, cor, criado_em } = calendar;
        const [result] = await db.query('UPDATE calendarios SET nome_exibicao = ?, cor = ?, criado_em = ? WHERE id_calendario = ?', [nome_exibicao, cor, criado_em, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    // Deleta um calendário pelo ID
    static async delete(id_calendario) {
        const [result] = await db.query('DELETE FROM calendarios WHERE id_calendario = ?', [id_calendario]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = CalendarModel;
// Exporta a classe CalendarModel para ser usada nos services   