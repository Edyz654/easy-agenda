const CommitmentModel = require('../models/commitmentModel');

class CommitmentService {
    // Busca todos os compromissos cadastrados
    static async getAllCommitments() {
        return await CommitmentModel.findAll();
    }

    // Cria um novo compromisso
    static async createCommitment(commitment) {
        return await CommitmentModel.create({
            titulo: commitment.titulo,
            cor: commitment.cor,
            prioridade: commitment.prioridade,
            status: commitment.status ?? 0,
            horario_inicial: commitment.horario_inicial,
            horario_final: commitment.horario_final,
            observacoes: commitment.observacoes,
            id_calendario: commitment.id_calendario
        });
    }

    // Atualiza informações de um compromisso existente
    static async updateCommitment(id_compromisso, dadosAtualizados) {
        const updatedRows = await CommitmentModel.update(id_compromisso, dadosAtualizados);

        if (updatedRows === 0) {
            throw new Error("Compromisso não encontrado.");
        }

        return updatedRows;
    }

    // Deleta um compromisso pelo ID
    static async deleteCommitment(id_compromisso) {
        const deletedRows = await CommitmentModel.delete(id_compromisso);

        if (deletedRows === 0) {
            throw new Error("Compromisso não encontrado.");
        }

        return deletedRows;
    }
}

module.exports = CommitmentService;
// Exporta a classe CommitmentService para ser usada nos controllers