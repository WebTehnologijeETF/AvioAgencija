-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2015 at 01:20 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spirala5`
--

-- --------------------------------------------------------

--
-- Table structure for table `komentari`
--

CREATE TABLE IF NOT EXISTS `komentari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `novost` int(11) NOT NULL,
  `datum` timestamp NOT NULL,
  `autor` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `novost` (`novost`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=28 ;

--
-- Dumping data for table `komentari`
--

INSERT INTO `komentari` (`id`, `novost`, `datum`, `autor`, `email`, `tekst`) VALUES
(5, 3, '2015-05-24 09:26:27', 'Sinisa Vuco', 'svuco@narodnjaci.com', 'Podigla me iz pepela'),
(6, 3, '2015-05-26 11:14:19', 'Bebek Zeljko', 'zbebek@gmail.com', 'Sinoc sam, sinoc sam, pola kafane popio'),
(7, 3, '2015-05-26 14:12:44', 'Emir Djenasevic', 'emir.dj93@gmail.com', 'Neki random komentar'),
(9, 3, '2015-05-26 14:16:05', 'Anonimus', '', 'Ja zelim biti amoniman'),
(10, 3, '2015-05-26 14:25:19', 'Emir Djenasevic', 'emir.dj93@gmail.com', 'Opet ja, dobra novost pravo :D'),
(17, 1, '2015-05-28 20:32:15', '', '', 'Bravo asistente'),
(21, 1, '2015-05-28 21:16:09', '', '', 'Idemoooooo'),
(23, 1, '2015-05-28 21:23:10', 'Emir Đenašević', '', 'eO EO EO KOMENTAR'),
(24, 3, '2015-05-28 22:22:48', 'Emir Đenašević', '', 'Oci moje lijepe'),
(25, 3, '2015-05-28 22:27:38', 'Anonimus', '', 'Ja sam anonimni komentator'),
(26, 3, '2015-05-28 22:27:57', 'Abid Sabanovic', '', 'Ja nisam anonimni komentator'),
(27, 3, '2015-05-28 22:28:21', 'Abid Sabanovic', 'abids@hotmail.com', 'U ovom komentaru sam ostavio i komentar cak');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imePrezime` varchar(60) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=21 ;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `imePrezime`, `email`, `username`, `password`) VALUES
(1, 'Emir Đenašević', 'emir.dj93@gmail.com', 'admin', '5f4dcc3b5aa765d61d8327deb882cf99'),
(6, 'Aldin Kiselica', 'akiselica1@etf.unsa.ba', 'kislee', '3a08d334b161a97a13629cd3f961cce7'),
(16, 'Zlatan Čilić', 'zcilic1@etf.unsa.ba', 'zlaja', '5f4dcc3b5aa765d61d8327deb882cf99'),
(17, 'Tarik Demirovic', 'tdemirovic1@etf.unsa.ba', 'vatovato', '5f4dcc3b5aa765d61d8327deb882cf99'),
(20, 'Emir Đenašević', 'emir.dj93@gmail.com', 'djennox', '5f4dcc3b5aa765d61d8327deb882cf99');

-- --------------------------------------------------------

--
-- Table structure for table `novosti`
--

CREATE TABLE IF NOT EXISTS `novosti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datum` timestamp NOT NULL,
  `naslov` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `slika` varchar(200) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `sadrzaj` text COLLATE utf8_slovenian_ci NOT NULL,
  `detaljno` text COLLATE utf8_slovenian_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `novosti`
--

INSERT INTO `novosti` (`id`, `datum`, `naslov`, `autor`, `slika`, `sadrzaj`, `detaljno`) VALUES
(1, '2015-05-26 08:43:33', 'OVO JE NEKI PRIMJER NOVOSTI', 'Vedran Ljubović', 'img/coding-future.jpg', 'Sada ću napisati neki osnovni tekst.\r\nOvaj osnovni tekst se nalazi u više redova.\r\nLorem ipsum dolor sit amet i tako dalje mrsko mi je da kopiram.', 'Ovdje sada slijedi detaljniji tekst novosti. \r\nLorem ipsum dolor sit amet i tako dalje mrsko mi je da kopiram.\r\nLorem ipsum dolor sit amet i tako dalje mrsko mi je da kopiram.'),
(3, '2015-05-26 09:20:32', 'OVO JE NEKI PRIMJER NOVOSTI', 'Vedran Ljubović', 'img/coding-future.jpg', 'Sada ću napisati neki osnovni tekst.\nOvaj osnovni tekst se nalazi u vise redova.\nLorem ipsum, ma cao zdravo', 'Ovo je neki detaljniji tekst navodno.');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `komentari`
--
ALTER TABLE `komentari`
  ADD CONSTRAINT `komentari_ibfk_1` FOREIGN KEY (`novost`) REFERENCES `novosti` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
