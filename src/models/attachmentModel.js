const db = require('../config/database');
// Importa a conexão pool com o banco de dados

class AttachmentModel {
    // Busca todos os anexos
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM anexos');
        return rows;
    }

    // Busca um anexo pelo ID
    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM anexos WHERE id_anexo = ?',
            [id]
        );
        return rows[0];
    }

    // Cria um novo anexo
    static async create(attachment) {
        const { nome_arquivo, caminho_arquivo, evento_id } = attachment;