const guests_commitmentService = require('../services/guests_commitmentService');
// Importa o serviço que contém a lógica de negócio para manipular os convidados dos compromissos

class Guests_commitmentController {
    static async getAll(req, res) {
        try {
            const guests_commitment = await Guests_commitmentService.getAllGuests_commitments();
            res.json(guests_commitment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const guests_commitment = await Guests_commitmentService.createGuests_commitment(req.body);

            res.status(201).json(guests_commitment);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const deletedRows = await Guests_commitmentService.deleteGuests_commitment(
                req.params.id
            );
            if (deletedRows === 0) {
                return res.status(404).json({ error: "Convidado do compromisso não encontrado." });
            }
            res.json({ message: "Convidado do compromisso deletado com sucesso." });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
    
module.exports = Guests_commitmentController;
// Exporta a classe Guests_commitmentController para ser usada nas rotas