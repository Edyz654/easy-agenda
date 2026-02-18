const db = require('../config/database');

class NotificationModel {

    // Busca todas as notificações
    static async findAll() {
        const [rows] = await db.query(
            'SELECT * FROM notificacoes ORDER BY id_notificacao DESC'
        );
        return rows;
    }

    // Busca todas as notificações de um usuário
    static async findByUserId(usuario_id) {
        const [rows] = await db.query(
            'SELECT n.* FROM notificacoes n JOIN compromissos c ON c.id_compromisso = n.id_compromisso JOIN calendarios cal ON cal.id_calendario = c.calendario_id WHERE cal.usuario_id = ? ORDER BY n.id_notificacao DESC',
            [usuario_id]
        );
        return rows;
    }

    // Cria uma nova notificação
    static async create(notification) {
        const { id_compromisso, texto } = notification;
        const [result] = await db.query(
            'INSERT INTO notificacoes (id_compromisso, texto) VALUES (?, ?)',

            [id_compromisso, texto] 
        );
        return result.insertId; // Retorna o ID da notificação criada
    }

    // Atualiza uma notificação existente
    static async update(id, notification) {
        const { id_compromisso,texto } = notification;
        const [result] = await db.query(
            'UPDATE notificacoes SET id_compromisso = ?, texto = ? WHERE id_notificacao = ?',
            [id_compromisso, texto, id]
        );
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    static async delete(id_notificacao) {
        const [result] = await db.query(
            'DELETE FROM notificacoes WHERE id_notificacao = ?',
            [id_notificacao]

        )
        return result.affectedRows;
    }
}

module.exports = NotificationModel;




