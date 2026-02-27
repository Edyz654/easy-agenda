const db = require('../config/database');
// Importa a conexão pool com o banco de dados

class CalendarModel {
    // Busca todos os calendários
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM calendarios');
        return rows;
    }

    // Busca um calendário pelo ID
    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM calendarios WHERE id_calendario = ?',
            [id]
        );
        return rows[0];
    }

    // Cria um novo calendário
    static async create(calendar) {
        const { nome_exibicao, cor, usuario_id } = calendar;
        const [result] = await db.query(
            'INSERT INTO calendarios (nome_exibicao, cor, usuario_id) VALUES (?,?,?)',
            [nome_exibicao, cor, usuario_id]
        );
        return result.insertId; // Retorna o ID do calendário criado
    }

    // Atualiza um calendário existente
    static async update(id, calendar) {
        const { nome_exibicao, cor } = calendar;
        const [result] = await db.query('UPDATE calendarios SET nome_exibicao = ?, cor = ? WHERE id_calendario = ?',
            [nome_exibicao, cor, id]
        );
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    // Deleta um calendário pelo ID
    static async delete(id) {
        const [result] = await db.query('DELETE FROM calendarios WHERE id_calendario = ?', [id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = CalendarModel;
// Exporta a classe CalendarModel para ser usada nos services   
