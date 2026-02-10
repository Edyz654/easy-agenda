const db = require('../config/database');

class Guests_CommitmentModel {
    // Lista todos os convidados de um compromisso
    static async findByCommitmentId(id_compromisso) {
        const [rows] = await db.query(
            'SELECT gc.id_usuario, u.nome_exibicao FROM convidados_compromisso gc JOIN usuarios u ON gc.id_usuario = u.id_usuario WHERE gc.id_compromisso = ?',
            [id_compromisso]
        );
        return rows;
    }

    // Adiciona um convidado a um compromisso
    static async addGuest(id_compromisso, id_usuario) {
        const [result] = await db.query(
            'INSERT INTO convidados_compromisso (id_compromisso, id_usuario) VALUES (?, ?)',
            [id_compromisso, id_usuario]
        );
        return result.affectedRows;
    }

    // Remove um convidado de um compromisso
    static async removeGuest(id_compromisso, id_usuario) {
        const [result] = await db.query(
            'DELETE FROM convidados_compromisso WHERE id_compromisso = ? AND id_usuario = ?',
            [id_compromisso, id_usuario]
        );
        return result.affectedRows;
    }
}

module.exports = Guests_CommitmentModel;

