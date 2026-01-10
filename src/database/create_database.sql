-- create_database.sql
-- Cria o banco de dados e adiciona instruções para executar os arquivos de tabelas e seed.
-- ATENÇÃO: substitua senhas e usuários por valores seguros em produção.

-- 1) Cria o database
CREATE DATABASE IF NOT EXISTS `easy_agenda` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2) Usa o database criado
USE `easy_agenda`;

-- 3) (Opcional) Cria um usuário específico para a aplicação
-- Substitua 'change_me_secure_password' por uma senha forte antes de executar em produção
CREATE USER IF NOT EXISTS 'easy_user'@'localhost' IDENTIFIED BY 'change_me_secure_password';
GRANT ALL PRIVILEGES ON `easy_agenda`.* TO 'easy_user'@'localhost';
FLUSH PRIVILEGES;

