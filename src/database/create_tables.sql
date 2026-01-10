-- create_tables.sql
-- Corrected and completed CREATE TABLE statements for Easy Agenda

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int AUTO_INCREMENT NOT NULL,
  `nome_exibicao` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL UNIQUE,
  `telefone` varchar(15) NOT NULL,
  `cpf` varchar(11) NOT NULL UNIQUE,
  `genero` CHAR(1) NOT NULL,
  `login` varchar(100) NOT NULL UNIQUE,
  `senha` varchar(100) NOT NULL,
  `fuso_horario` varchar(50) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `calendarios` (
  `id_calendario` int AUTO_INCREMENT NOT NULL,
  `nome_exibicao` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_usuario_id_ca` int NOT NULL,
  PRIMARY KEY (`id_calendario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `compromissos` (
  `id_compromisso` int AUTO_INCREMENT NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `prioridade` varchar(10) NOT NULL,
  `status` boolean NOT NULL DEFAULT FALSE,
  `horario_inicial` datetime NOT NULL,
  `horario_final` datetime NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `observacoes` text,
  `id_calendario` int NOT NULL,
  PRIMARY KEY (`id_compromisso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `anexos` (
  `id_anexos` int AUTO_INCREMENT NOT NULL,
  `nome_arquivo` varchar(250) NOT NULL,
  `tamanho_bytes` int NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `formato_arquivo` varchar(50) NOT NULL,
  `id_compromisso` int NOT NULL,
  PRIMARY KEY (`id_anexos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `notificacoes` (
  `id_notificacao` int AUTO_INCREMENT NOT NULL,
  `id_compromisso` int NOT NULL,
  `texto` varchar(250) NOT NULL,
  PRIMARY KEY (`id_notificacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `Convidados_Compromisso` (
  `id_compromisso` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_compromisso`, `id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Foreign keys
ALTER TABLE `compromissos` ADD CONSTRAINT `compromissos_fk10` FOREIGN KEY (`id_calendario`) REFERENCES `calendarios`(`id_calendario`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `calendarios` ADD CONSTRAINT `calendarios_fk4` FOREIGN KEY (`fk_usuario_id_ca`) REFERENCES `usuarios`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `anexos` ADD CONSTRAINT `anexos_fk5` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos`(`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `notificacoes` ADD CONSTRAINT `notificacoes_fk1` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos`(`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Convidados_Compromisso` ADD CONSTRAINT `Convidados_Compromisso_fk0` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos`(`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Convidados_Compromisso` ADD CONSTRAINT `Convidados_Compromisso_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
