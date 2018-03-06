-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 06 Mars 2018 à 16:36
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.25-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `lje_filrouge`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualités`
--

CREATE TABLE `actualités` (
  `id` int(11) NOT NULL,
  `nom_evenement` varchar(255) CHARACTER SET utf8 NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date DEFAULT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time DEFAULT NULL,
  `lieu` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8,
  `image` text CHARACTER SET utf8,
  `document` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `actualités`
--

INSERT INTO `actualités` (`id`, `nom_evenement`, `date_debut`, `date_fin`, `heure_debut`, `heure_fin`, `lieu`, `description`, `image`, `document`) VALUES
(1, 'Journée de vente des Mini-Entreprises - Centre Commercial Cora - Rocourt - 2 décembre 2017', '2017-12-02', NULL, '09:00:00', '17:30:00', 'Centre Commercial Cora - Chaussée de Tongres, 269 à 4000 Rocourt', 'Votre produit, service est prêt ? Envie de démarcher vos premiers clients dans une chouette ambiance et de vous démarquer des autres par un stand super original ?\r\n\r\nParticipez aux premières ventes organisées par LJE !\r\n\r\nHoraire :\r\n\r\n9h00	\r\n Accueil des participants au stand LJE\r\n- Attribution de l’emplacement\r\n- Remise d’une nappe noire contre une carte d’identité\r\n- Distribution du bulletin pour le concours\r\n\r\n Nous mettons à votre disposition:\r\n- Une table de 120 cm x 80 cm\r\n- Une nappe noire\r\n- Electricité (sur demande)\r\n\r\n9h30	\r\nFin du montage (exigence de la galerie)\r\n\r\n A prendre de votre côté:\r\n- Décoration stand « Noël »\r\n- Allonges électriques \r\n- Papier collant, punaises,…\r\n\r\n16h00	 Remise des prix	\r\nMerci à notre partenaire du jour\r\ncora.jpg\r\n\r\n17h30	 Démontage, rangement et remise en état des lieux\r\n\r\nInscription :\r\nP.A.F : 15,00€ + 30,00 € de caution – le montant de cette caution sera conservé* par LJE jusqu’à la clôture de votre Mini-Entreprise puisqu’il couvre votre participation à toutes les ventes organisées par LJE dans l’année  * sauf en cas de non-respect du règlement (voir fichier en annexe).\r\n\r\nLe montant de 45 € est à verser sur le compte BE66 2100 4390 1343 au nom de l’ASBL LJE, communication : n° et nom de groupe/Vente Basilix.\r\nDate limite des inscriptions : lundi 27 novembre 2017.\r\n\r\nPrière d’utiliser ce document comme pièce comptable justificative (TVA, non récupérable).\r\n\r\nNous profitons de ce message pour vous rappeler que pour être tout à fait en ordre, vous devez avoir complété vos fiches individuelles et de groupe (produit) sur la plateforme informatique, payé les droits d’inscription et envoyé les feuilles d’engagement dûment complétées au secrétariat LJE.\r\n\r\nAccès transports en commun \r\nVous pouvez très facilement nous rejoindre via les transports en commun ! Détails du plan d\'accès.\r\n\r\nPour vous y aider :\r\nEn bus,\r\n\r\nLigne 56 : Rocourt – Montegnée – St-Gilles – Tilleur – Jemeppe\r\nLigne 87 : Ans – Rocourt – Liers\r\nLigne 70 : St-Lambert – Rocourt – Liers – Slins\r\nLigne 73 : St-Lambert – Rocourt – Liers – Slins -Glons\r\nLigne 74 : Tongeren – Luik (de Lijn)\r\nPour plus d’informations sur les bus : www.infotec.be', 'Vente_Mini-Entreprises_-_Cora_Roccourt_-_20_février_1.jpg', 'REGLEMENT-VENTE.PDF'),
(2, 'Nom de l\'évenement: Live Facebook pour tout connaître au fonctionnement des ventes - 4 décembre à 18h30!', '2017-12-04', NULL, '18:30:00', NULL, 'Notre page facebook : https://www.facebook.com/LJE.MiniEntreprise', 'Rendez-vous lundi 4 décembre sur notre page Facebook pour suivre en direct le live des coordinateurs du programme Mini-Entreprise!\r\n\r\nIls seront en live à partir de 18h30 pour répondre à toutes vos interrogations en rapport avec les premières ventes organisées par LJE. Ils seront là pour vous soutenir et vous expliquer en détails comment réussir vos vente en ce début d\'année entrepreneuriale.\r\n\r\nAvis\r\nSi vous souhaitez faire la promotion de votre Mini-Entreprise, de votre page Facebook et de votre produit, n\'hésitez pas à nous envoyer un message via le chat Facebook de notre page LJE - Mini-Entreprise et nous nous ferons un plaisir de partager votre publication. Préparez 3-4 lignes de texte et joignez à cela quelques photos afin que nous puissions relayer votre publication le plus rapidemment possible!\r\n\r\n#StayTunned', 'facebook-live3.png', NULL),
(3, 'Journée de vente des Mini-Entreprises - Basilix Shopping Center - Bruxelles - 25 novembre 2017', '2017-11-25', NULL, '09:00:00', '18:00:00', 'Basilix Shopping Center - Avenue Charles Quint 420 - 1082 Bruxelles', 'Votre produit, service est prêt ? Envie de démarcher vos premiers clients dans une chouette ambiance et de vous démarquer des autres par un stand super original ?\r\n\r\nParticipez aux premières ventes organisées par LJE !\r\n\r\nHoraire :\r\n\r\n9h00	\r\n Accueil des participants au stand LJE\r\n- Attribution de l’emplacement\r\n- Remise d’une nappe noire contre une carte d’identité\r\n- Distribution du bulletin pour le concours\r\n\r\n Nous mettons à votre disposition:\r\n- Une table de 120 cm x 80 cm\r\n- Une nappe noire\r\n- Electricité (sur demande)\r\n\r\n9h45	\r\nFin du montage (exigence de la galerie)\r\n\r\n A prendre de votre côté:\r\n- Décoration stand « Noël »\r\n- Allonges électriques (de 50 m minimum)\r\n- Papier collant, punaises,…\r\n\r\n10h00	 Ouverture des magasins	\r\nMerci à notre partenaire du jour\r\nbasilix.jpg\r\n\r\n15h00	 Clôture du concours \r\nProclamation\r\n18h00	 Démontage, rangement et remise en état des lieux\r\n\r\nInscription :\r\nP.A.F : 15,00€ + 30,00 € de caution – le montant de cette caution sera conservé* par LJE jusqu’à la clôture de votre Mini-Entreprise puisqu’il couvre votre participation à toutes les ventes organisées par LJE dans l’année  * sauf en cas de non-respect du règlement (voir fichier en annexe).\r\n\r\nLe montant de 45 € est à verser sur le compte BE66 2100 4390 1343 au nom de l’ASBL LJE, communication : n° et nom de groupe/Vente Basilix.\r\nDate limite des inscriptions : lundi 20 novembre 2017.\r\n\r\nPrière d’utiliser ce document comme pièce comptable justificative (TVA, non récupérable).\r\n\r\nNous profitons de ce message pour vous rappeler que pour être tout à fait en ordre, vous devez avoir complété vos fiches individuelles et de groupe (produit) sur la plateforme informatique, payé les droits d’inscription et envoyé les feuilles d’engagement dûment complétées au secrétariat LJE.\r\n\r\nTransports en commun :\r\nLe Basilix Shopping Center est desservi par :\r\n\r\nLe métro (station Simonis) - Les bus *STIB 87 (Simonis-Basilix) et 84 (Heysel-Bekkant), arrêt : Basilix\r\n(voir horaires sur www.stib.be) *De Lijn: 214 (direction Alost), arrêt : Basilix.\r\nInscription à la journée de vente au basilix - 25 novembre 2017', 'Vente-Balisix---26-novembre-2016---Sylvain-87.jpg', 'REGLEMENT-VENTE.PDF');

-- --------------------------------------------------------

--
-- Structure de la table `administrateurs`
--

CREATE TABLE `administrateurs` (
  `id` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `actualités`
--
ALTER TABLE `actualités`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `actualités`
--
ALTER TABLE `actualités`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
