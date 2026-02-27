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
        const [rows] = await db.query('SELECT * FROM anexos WHERE id_anexos = ?',
            [id]
        );
        return rows[0];
    }

    // Cria um novo anexo
    static async create(attachment) {
        const { nome_original, nome_arquivo, mime_type, tamanho_bytes, caminho, id_compromisso } = attachment;
        const [result] = await db.query(
            'INSERT INTO anexos (nome_original, nome_arquivo, mime_type, tamanho_bytes, caminho, id_compromisso) VALUES (?,?,?,?,?,?)',
            [nome_original, nome_arquivo, mime_type, tamanho_bytes, caminho, id_compromisso]
        );
        return result.insertId; // Retorna o ID do anexo criado
    }

    // Atualiza um anexo existente
    static async update(id, attachment) {
        const { nome_original, nome_arquivo, mime_type, tamanho_bytes, caminho, id_compromisso } = attachment;
        const [result] = await db.query(
            'UPDATE anexos SET nome_original = ?, nome_arquivo = ?, mime_type = ?, tamanho_bytes = ?, caminho = ?, id_compromisso = ? WHERE id_anexos = ?',
            [nome_original, nome_arquivo, mime_type, tamanho_bytes, caminho, id_compromisso, id]
        );
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    // Deleta um anexo pelo ID
    static async delete(id) {
        const [result] = await db.query('DELETE FROM anexos WHERE id_anexos = ?', [id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = AttachmentModel;
// Exporta a classe AttachmentModel para ser usada nos services 
