-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Nov-2019 às 04:35
-- Versão do servidor: 10.3.15-MariaDB
-- versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdcadastroclientes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbcliente`
--

CREATE TABLE `tbcliente` (
  `codigo` int(6) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `credito` float DEFAULT NULL,
  `situacao` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbcliente`
--

INSERT INTO `tbcliente` (`codigo`, `nome`, `email`, `credito`, `situacao`) VALUES
(1, 'zanette', 'zanette_ciriaco@hotmail.com', 1000, 'ativo'),
(2, 'jose', 'jose@hotmail.com', 20000, 'inativo'),
(3, 'asdas', 'zanette_ciriaco@hotmail.com', 123123, 'Ativo'),
(4, 'gabriel', 'gabriel@hotmail.com', 10023, 'Ativo'),
(7, 'maria', 'maria@hotmail.com', 1234, 'Ativo'),
(8, 'luciana', 'luciana@hotmail.com', 1234, 'Ativo'),
(9, 'marcelo', 'marcelo@gmail.com', 12345, 'Ativo'),
(10, 'tonha', 'zanette_ciriaco@hotmail.com', 1231230, 'Ativo'),
(11, 'jukes', 'jukes@gasdas.com', 123.5, 'undefined'),
(12, 'yoda', 'cbloiro@hotmail.com', 132.35, 'Ativo'),
(13, 'severina', 'severina@hotmail.com', 1234.59, 'Ativo'),
(14, 'mateussa', 'sadmsada@homta.com', 123.5, 'Inativo'),
(17, 'shirobako', 'shirobako@hotmail.com', 1234, 'Inativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tblogin`
--

CREATE TABLE `tblogin` (
  `usuario` varchar(70) NOT NULL,
  `senha` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tblogin`
--

INSERT INTO `tblogin` (`usuario`, `senha`) VALUES
('zanette', '1234');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices para tabela `tblogin`
--
ALTER TABLE `tblogin`
  ADD PRIMARY KEY (`usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbcliente`
--
ALTER TABLE `tbcliente`
  MODIFY `codigo` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
