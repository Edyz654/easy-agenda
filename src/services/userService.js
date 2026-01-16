const UserModel = require("../models/userModel");
// Importa o Model responsável pelo acesso ao banco de dados

const validateEmail = require("../utils/validateEmail");
// Importa a função utilitária que valida o formato de e-mail

class UserService {
    // Busca todos os usuários cadastrados
    static async getAllUsers() {
        return await UserModel.findAll();
    }

    // Cria um novo usuário após validações
    static async createUser(user) {
        if (!validateEmail(user.email)) {
            throw new Error("Formato de email inválido."); // Valida o formato do email
        }

        const existingUser = await UserModel.findByEmail(user.email);
        if (existingUser) {
            throw new Error("Email já cadastrado."); // Impede cadastro de e-mails duplicados
        }

        return await UserModel.create({
            nome_exibicao: user.nome_exibicao,
            email: user.email,
            telefone: user.telefone,
            cpf: user.cpf,
            genero: user.genero,
            login: user.login,
            senha: user.senha,
            fuso_horario: user.fuso_horario,
            criado_em: user.criado_em
        }); // Cria o novo usuário
    }

    // Atualiza informações de um usuário existente
    static async updateUser(id_usuario, dadosAtualizados) {
        const updatedRows = await UserModel.update(id_usuario, dadosAtualizados);

        if (updatedRows === 0) {
            throw new Error("Usuário não encontrado."); // Caso nenhum usuário tenha sido atualizado
        }

        return updatedRows;
    }

    // Deleta um usuário pelo ID
    static async deleteUser(id_usuario) {
        const deletedRows = await UserModel.delete(id_usuario);

        if (deletedRows === 0) {
            throw new Error("Usuário não encontrado."); // Caso nenhum usuário tenha sido deletado
        }

        return deletedRows;
    }
}



module.exports = UserService;
// Exporta a classe para ser utilizada pelos controllers