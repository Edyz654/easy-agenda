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


-- `easy-agendaDB`.calendarios definition

CREATE TABLE `calendarios` (
  `id_calendario` int NOT NULL AUTO_INCREMENT,
  `nome_exibicao` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` datetime DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id_calendario`),
  KEY `fk_calendarios_usuarios` (`usuario_id`),
  CONSTRAINT `fk_calendarios_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.compromissos definition

CREATE TABLE `compromissos` (
  `id_compromisso` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `prioridade` enum('baixa','media','alta') DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `horario_inicial` datetime NOT NULL,
  `horario_final` datetime NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` datetime DEFAULT NULL,
  `observacoes` text,
  `calendario_id` int NOT NULL,
  PRIMARY KEY (`id_compromisso`),
  KEY `idx_compromissos_calendarios` (`calendario_id`),
  CONSTRAINT `compromissos_fk_calendario` FOREIGN KEY (`calendario_id`) REFERENCES `calendarios` (`id_calendario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_compromissos_calendarios` FOREIGN KEY (`calendario_id`) REFERENCES `calendarios` (`id_calendario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.convidados_compromisso definition

CREATE TABLE `convidados_compromisso` (
  `id_compromisso` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_compromisso`,`id_usuario`),
  KEY `fk_convidados_compromisso_usuarios` (`id_usuario`),
  CONSTRAINT `fk_convidados_compromisso_compromissos` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_convidados_compromisso_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- `easy-agendaDB`.notificacoes definition

CREATE TABLE `notificacoes` (
  `id_notificacao` int NOT NULL AUTO_INCREMENT,
  `id_compromisso` int NOT NULL,
  `texto` varchar(250) NOT NULL,
  PRIMARY KEY (`id_notificacao`),
  KEY `fk_notificacoes_compromissos` (`id_compromisso`),
  CONSTRAINT `fk_notificacoes_compromissos` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE
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
  KEY `fk_anexos_compromissos` (`id_compromisso`),
  CONSTRAINT `fk_anexos_compromissos` FOREIGN KEY (`id_compromisso`) REFERENCES `compromissos` (`id_compromisso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;