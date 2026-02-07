const Guests_commitmentModel = require('../models/guests_commitmentModel');

class Guests_commitmentService {
    // Busca todos os convidados de um compromisso
    static async getAllGuestsCommitments() {
        return await Guests_commitmentModel.findAll();
    }

    // Adiciona um novo convidado a um compromisso
    static async addGuestToCommitment(guest_commitment) {
        return await Guests_commitmentModel.create({
            

    }
}