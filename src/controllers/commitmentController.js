const CommitmentService = require('../services/commitmentService');
// Importa o serviço que contém a lógica de negócio para manipular compromissos

class CommitmentController {
    static async getAll(req, res) {
        try {
            const commitments = await CommitmentService.getAllCommitments();
            res.json(commitments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const commitment = await CommitmentService.createCommitment(req.body);

            res.status(201).json(commitment);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedRows = await CommitmentService.updateCommitment(
                req.params.id_compromisso,
                req.body
            );
            if (updatedRows === 0) {
                return res.status(404).json({ error: "Compromisso não encontrado." });
            }
            res.json({ message: "Compromisso atualizado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedRows = await CommitmentService.deleteCommitment(
                req.params.id_compromisso //Pega o ID da URL
            );
            if (deletedRows === 0) {
                return res.status(404).json({ error: "Compromisso não encontrado." }); // Verifica se o ID é válido
            }
            res.json({ message: "Compromisso deletado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CommitmentController;
// Exporta a classe CommitmentController para ser usada nas rotas

