-- `easy-agendaDB`.compromissos definition

CREATE TABLE `compromissos` (
  `id_compromisso` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `prioridade` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `horario_inicial` datetime NOT NULL,
  `horario_final` datetime NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `observacoes` text,
  `id_calendario` int NOT NULL,
  PRIMARY KEY (`id_compromisso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.usuarios definition

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome_exibicao` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `genero` char(1) NOT NULL,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `fuso_horario` varchar(50) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.Convidados_Compromisso definition

CREATE TABLE `Convidados_Compromisso` (
  `id_compromisso` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_compromisso`,`id_usuario`),
  KEY `Convidados_Compromisso_fk1` (`id_usuario`),
  CONSTRAINT `Convidados_Compromisso_fk0` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Convidados_Compromisso_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.anexos definition

CREATE TABLE `anexos` (
  `id_anexos` int NOT NULL AUTO_INCREMENT,
  `nome_arquivo` varchar(250) NOT NULL,
  `tamanho_bytes` int NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `formato_arquivo` varchar(50) NOT NULL,
  `id_compromisso` int NOT NULL,
  PRIMARY KEY (`id_anexos`),
  KEY `anexos_fk5` (`id_compromisso`),
  CONSTRAINT `anexos_fk5` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.calendarios definition

CREATE TABLE `calendarios` (
  `id_calendario` int NOT NULL AUTO_INCREMENT,
  `nome_exibicao` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` datetime DEFAULT NULL,
  `fk_usuario_id_ca` int NOT NULL,
  PRIMARY KEY (`id_calendario`),
  KEY `calendarios_fk4` (`fk_usuario_id_ca`),
  CONSTRAINT `calendarios_fk4` FOREIGN KEY (`fk_usuario_id_ca`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.notificacoes definition

CREATE TABLE `notificacoes` (
  `id_notificacao` int NOT NULL AUTO_INCREMENT,
  `id_compromisso` int NOT NULL,
  `texto` varchar(250) NOT NULL,
  PRIMARY KEY (`id_notificacao`),
  KEY `notificacoes_fk1` (`id_compromisso`),
  CONSTRAINT `notificacoes_fk1` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;