const db = require('../config/database');
// Importa a conexão pool com o banco de dados

class UserModel {
    // Busca todos os usuários
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM usuarios');
        return rows;
    }

    // Busca um usuário pelo email
    static async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?',
            [email]);
        return rows[0];
    }

    // Busca um usuário pelo ID
    static async findById(id_usuario) {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?',
            [id_usuario]);
        return rows[0];
    }

    // Cria um novo usuário
    static async create(user) {
        const { nome_exibicao, email, telefone, cpf, genero, login, senha, fuso_horario, criado_em } = user;
        const [result] = await db.query('INSERT INTO usuarios (nome_exibicao, email, telefone, cpf, genero, login, senha, fuso_horario, criado_em) VALUES (?,?,?,?,?,?,?,?,?)', [nome_exibicao, email, telefone, cpf, genero, login, senha, fuso_horario, criado_em]);
        return result.insertId; // Retorna o ID do usuário criado
    }

    // Atualiza um usuário existente
    static async update(id, user) {
        const { nome_exibicao, email, telefone, cpf, genero, login, senha, fuso_horario, criado_em } = user;
        const [result] = await db.query('UPDATE usuarios SET nome_exibicao = ?, email = ?, telefone = ?, cpf = ?, genero = ?, login = ?, senha = ?, fuso_horario = ?, criado_em = ? WHERE id = ?', [nome_exibicao, email, telefone, cpf, genero, login, senha, fuso_horario, criado_em, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    // Deleta um usuário pelo ID
    static async delete(id_usuario) {
        const [result] = await db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = UserModel;
// Exporta a classe UserModel para ser usada nos services