const Guests_commitmentModel = require('../models/guests_commitmentModel');

class Guests_commitmentService {
    // Busca todos os convidados de um compromisso
    static async getAllGuestsCommitments(id_compromisso) {
        return await Guests_commitmentModel.findAll(id_compromisso);
    }

    // Adiciona um convidado a um compromisso existente
    static async addGuestToCommitment(id_compromisso, id_usuario) {
        const addedRows = await Guests_commitmentModel.addGuest(id_compromisso, id_usuario)
        
        if(addedRows === 0) {
            throw new Error('Não foi possível adicionar o convidade. Verifique se o compromisso e o usuário existem.');
        }

        return await addedRows;
    }

    // Remove um convidado de um compromisso existente
    static async removeGuestFromCommitment(id_compromisso, id_usuario) {
        const deletedRows = await Guests_commitmentModel.removeGuest(id_compromisso, id_usuario);

        if(deletedRows === 0) {
            throw new Error('Convidado não encontrado para este compromisso.');
        }

        return deletedRows;
    }
}

module.exports = Guests_commitmentService;