const Guests_commitmentService = require('../services/guests_commitmentService');
// Importa o serviço que contém a lógica de negócio para manipular os convidados dos compromissos

class Guests_commitmentController {
    static async getAll(req, res) {
        try {
            const guests_commitment = await Guests_commitmentService.getAllGuestsCommitments(
                req.params.id_compromisso
            );
            res.json(guests_commitment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async addGuest(req, res) {
        try {
            await Guests_commitmentService.addGuestToCommitment(
                req.body.id_compromisso,
                req.body.id_usuario
            );
            res.status(201).json({ message: "Convidado adicionado ao compromisso com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async removeGuest(req, res) {
        try {
            await Guests_commitmentService.removeGuestFromCommitment(
                req.params.id_compromisso,
                req.params.id_usuario
            );
            res.json({ message: "Convidado removido do compromisso com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
    
module.exports = Guests_commitmentController;
// Exporta a classe Guests_commitmentController para ser usada nas rotas