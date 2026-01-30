const db = require('../config/database');

class CommitmentModel {
    // Busca todos os compromissos
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM compromissos');
        return rows;
    }

    // Busca um compromisso pelo ID
    static async findById(id_compromisso) {
        const [rows] = await db.query('SELECT * FROM compromissos WHERE id = ?',
            [id_compromisso]);
        return rows[0];
    }

    // Cria um novo compromisso
    static async create(commitment) {
        const { titulo, cor, prioridade, status, horario_inicial, horario_final, observacoes } = commitment;
        const [result] = await db.query(
            'INSERT INTO compromissos (titulo, cor, prioridade, status, horario_inicial, horario_final, observacoes) VALUES (?,?,?,?,?,?,?)',
            [titulo, cor, prioridade, status, horario_inicial, horario_final, observacoes]);
        return result.insertId; // Retorna o ID do compromisso criado
    }

    // Atualiza um compromisso existente
    static async update(id, commitment) {
        const { titulo, cor, prioridade, status, horario_inicial, horario_final, observacoes } = commitment;
        const [result] = await db.query('UPDATE compromissos SET titulo = ?, cor = ?, prioridade = ?, status = ?, horario_inicial = ?, horario_final = ?, atualizado_em = NOW(), observacoes = ? WHERE id_compromisso = ?', [titulo, cor, prioridade, status, horario_inicial, horario_final, observacoes, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

        // VERIFICAR A INCLUSÃO DE UM PATCH PARA ATUALIZAÇÃO PARCIAL // REMOVER UPDATE ACIMA SE FOR O CASO

    // Deleta um compromisso pelo ID
    static async delete(id_compromisso) {
        const [result] = await db.query('DELETE FROM compromissos WHERE id_compromisso = ?', [id_compromisso]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = CommitmentModel;
// Exporta a classe CommitmentModel para ser usada nos services