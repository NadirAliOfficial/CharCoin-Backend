-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2025 at 02:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `charcoin`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `OTPAuthApp` varchar(50) DEFAULT NULL,
  `permissions` int(11) DEFAULT NULL,
  `registeration` date DEFAULT NULL,
  `last_login` date DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `email`, `phone`, `OTPAuthApp`, `permissions`, `registeration`, `last_login`, `image`, `created_by`, `created_on`) VALUES
(1, 'Smart Circus', 'smartcircus112233', 'test@gmail.com', '+9234758374', 'Google Authenticator', 12, '0000-00-00', '0000-00-00', 'image', '', '2025-05-31 10:38:35'),
(3, 'Smart Circus2', 'smartcircus112232', 'test@gmail.com', '+9234758374', 'Google Authenticator', 12, '0000-00-00', '0000-00-00', 'image', '', '2025-05-31 10:38:56'),
(4, 'Smart Circus2', 'smartcircus112234', 'test@gmail.com', '+9234758374', 'Google Authenticator', 12, '0000-00-00', '0000-00-00', 'image', '', '2025-05-31 10:39:03'),
(5, 'Faheem', 'admin', 'test@gmail.com', '+9234758374', 'Google Authenticator', 12, '0000-00-00', '0000-00-00', 'image', '', '2025-06-14 07:27:04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(130) NOT NULL,
  `color` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `causes`
--

CREATE TABLE `causes` (
  `id` int(11) NOT NULL,
  `cause_id` int(11) NOT NULL DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `label` varchar(200) NOT NULL DEFAULT '',
  `detail` varchar(1500) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `orgniaztion` varchar(255) DEFAULT NULL,
  `winning` varchar(50) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `benefactors` varchar(50) DEFAULT NULL,
  `points` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `videoUrl` varchar(400) NOT NULL,
  `supportedBy` varchar(300) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `causes`
--

INSERT INTO `causes` (`id`, `cause_id`, `title`, `label`, `detail`, `category`, `orgniaztion`, `winning`, `position`, `start_date`, `end_date`, `benefactors`, `points`, `image`, `videoUrl`, `supportedBy`, `created_by`, `created_on`) VALUES
(1, 0, '100,000 nutrient-rich meals provided to support 10,000 families for 10 days in East Africa.', 'Disaster & emergency aid', '\r\nBy casting your vote, you contribute points equivalent to the number of tokens you have in staking. While your vote increases a cause’s chances of receiving a higher donation, it does not guarantee it will win.\r\n\r\nAll causes for the month will receive a donation, but the amount will vary based on their final ranking when voting closes. The higher a cause ranks, the larger the donation it will receive.\r\n\r\nThe community’s collective votes determine the final distribution of funds. Once you vote, you cannot change or vote for another cause within the same month. You’ll need to wait for the next voting cycle to participate again.', 'Water', 'ASP', '1232', '43534', '2025-05-14', '2025-05-21', 'adfgdsf', '1212', '/images/causes/image-01.png', 'https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4', '1,', '', '2025-05-30 18:27:52'),
(2, 0, 'Historical fire-sides in the Los Angeles, California region.', 'MALNUTRITION & HUNGER', '\r\nBy casting your vote, you contribute points equivalent to the number of tokens you have in staking. While your vote increases a cause’s chances of receiving a higher donation, it does not guarantee it will win.\r\n\r\nAll causes for the month will receive a donation, but the amount will vary based on their final ranking when voting closes. The higher a cause ranks, the larger the donation it will receive.\r\n\r\nThe community’s collective votes determine the final distribution of funds. Once you vote, you cannot change or vote for another cause within the same month. You’ll need to wait for the next voting cycle to participate again.', 'Wate2', 'ASP2', '12322', '435342', '2025-05-13', '2025-05-20', 'adfgdsf2', '12122', '/images/causes/image-02.png', 'https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4', '1,', '', '2025-05-30 18:27:52'),
(3, 0, 'Rebuilding a school and 50 homes after a hurricane in northern Peru.\r\n', 'Educational / Disaster & Emergency Aid', '\r\nBy casting your vote, you contribute points equivalent to the number of tokens you have in staking. While your vote increases a cause’s chances of receiving a higher donation, it does not guarantee it will win.\r\n\r\nAll causes for the month will receive a donation, but the amount will vary based on their final ranking when voting closes. The higher a cause ranks, the larger the donation it will receive.\r\n\r\nThe community’s collective votes determine the final distribution of funds. Once you vote, you cannot change or vote for another cause within the same month. You’ll need to wait for the next voting cycle to participate again.', 'Wate2', 'ASP2', '12322', '435342', '2025-05-12', '2025-05-19', 'adfgdsf2', '12122', '/images/causes/image-03.png', 'https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4', '1,2,', '', '2025-05-30 18:27:52'),
(4, 0, 'Humanitarian Crisis in Gaza and the West Bank', 'MALNUTRITION & HUNGER', '\r\nBy casting your vote, you contribute points equivalent to the number of tokens you have in staking. While your vote increases a cause’s chances of receiving a higher donation, it does not guarantee it will win.\r\n\r\nAll causes for the month will receive a donation, but the amount will vary based on their final ranking when voting closes. The higher a cause ranks, the larger the donation it will receive.\r\n\r\nThe community’s collective votes determine the final distribution of funds. Once you vote, you cannot change or vote for another cause within the same month. You’ll need to wait for the next voting cycle to participate again.', 'Wate2', 'ASP2', '12322', '435342', '2025-05-12', '2025-05-19', 'adfgdsf2', '12122', '/images/causes/image-04.png', 'https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4', '', '', '2025-05-30 18:27:52');

-- --------------------------------------------------------

--
-- Table structure for table `charity_lottery_winner`
--

CREATE TABLE `charity_lottery_winner` (
  `id` int(11) NOT NULL,
  `username` varchar(130) DEFAULT NULL,
  `wallet` varchar(45) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `won` double DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charity_lottery_winner`
--

INSERT INTO `charity_lottery_winner` (`id`, `username`, `wallet`, `hash`, `won`, `created_by`, `created_on`) VALUES
(1, 'shaidAli', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '0sakdjflkasdjlkdsafhashhashhashhash', 122.2, 'admin', '2025-05-30 18:01:52'),
(2, 'ManzoorKhan', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '0sakdjflkasdjlkdsafhashhashhashhash', 122.2, 'admin', '2025-05-30 18:22:47'),
(3, 'Qurban Ali', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '0sakdjflkasdjlkdsafhashhashhashhash', 1234.2, 'admin', '2025-05-30 18:23:00'),
(4, 'Umar Din', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '0sakdjflkasdjlkdsafhashhashhashhash', 1234.2, 'admin', '2025-05-30 18:26:38'),
(5, 'Zubair Ali', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '0sakdjflkasdjlkdsafhashhashhashhash', 1234.2, 'admin', '2025-06-14 07:26:45');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `news_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `news_id`, `user_id`) VALUES
(47, 3, 8),
(48, 2, 8),
(49, 4, 8),
(50, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `brief` varchar(500) DEFAULT NULL,
  `category` varchar(100) DEFAULT '''NULL''',
  `image` varchar(255) DEFAULT NULL,
  `videoUrl` varchar(150) NOT NULL,
  `detail` text DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `posted_on` datetime DEFAULT current_timestamp(),
  `views` int(11) DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `brief`, `category`, `image`, `videoUrl`, `detail`, `status`, `posted_on`, `views`, `likes`, `created_by`, `created_on`) VALUES
(1, 'QuantumLeap Labs Announces Breakthrough in Cold Fusion Technology', NULL, 'SCIENCE & INNOVATION', '/images/news/ColdFusionBreakthrough.png', '', 'QuantumLeap Labs has officially revealed a significant advancement in cold fusion, promising a clean, virtually limitless energy source. This scientific milestone could revolutionize global power generation. Researchers are now focusing on scaling the technology for commercial applications within the next decade.', 'published', '0000-00-00 00:00:00', 343, 3, '', '2025-05-30 18:27:21'),
(2, 'AstraZeneca\'s New AI-Powered Drug Shows Promising Results in Cancer Trials', NULL, 'HEALTH & MEDICINE', '/images/news/AiDrugTrialSuccess.png', '', 'AstraZeneca\'s latest pharmaceutical, developed with cutting-edge AI, has demonstrated highly encouraging outcomes in its initial cancer clinical trials. Patients showed remarkable improvements with minimal side effects. The company plans accelerated approval pathways, bringing hope for a new era in oncology treatment.', 'published', '0000-00-00 00:00:00', 343, 6, '', '2025-05-30 18:27:21'),
(3, 'Eco-City Project in Neo-Dubai Unveils World\'s Largest Vertical Farm', NULL, 'URBAN DEVELOPMENT', '/images/news/VerticalFarmDubai.png', '', 'CHAR Coin donates $145,000 to Chilean earthquake victimsNeo-Dubai\'s ambitious Eco-City initiative has proudly unveiled the planet\'s largest integrated vertical farm. This massive agricultural marvel is designed to provide sustainable food security for the rapidly growing urban population. It represents a significant step forward in innovative, high-density urban farming solutions.', 'published', '0000-00-00 00:00:00', 343, 33, '', '2025-05-30 18:27:21'),
(4, 'Global Cyber Alliance Foils Major Ransomware Attack on Financial Institutions', NULL, 'Clean Water', '/images/news/CybersecurityAlliance.png', '', 'A coordinated effort by the Global Cyber Alliance successfully thwarted a sophisticated ransomware attack targeting several major financial institutions worldwide. The swift action prevented widespread data breaches and billions in potential losses. This operation highlights the increasing importance of international cooperation in cybersecurity.', 'published', '0000-00-00 00:00:00', 343, 8, '', '2025-05-30 18:27:21');

-- --------------------------------------------------------

--
-- Table structure for table `reward_charity_lottery`
--

CREATE TABLE `reward_charity_lottery` (
  `id` int(11) NOT NULL,
  `position` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `wallet` varchar(255) DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `transactions` int(11) DEFAULT NULL,
  `amount` varchar(50) DEFAULT NULL,
  `registration` date DEFAULT NULL,
  `last_transaction_date` date DEFAULT NULL,
  `awarded` varchar(50) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reward_charity_lottery`
--

INSERT INTO `reward_charity_lottery` (`id`, `position`, `name`, `wallet`, `hash`, `transactions`, `amount`, `registration`, `last_transaction_date`, `awarded`, `created_by`, `created_on`) VALUES
(1, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:36'),
(2, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:44'),
(3, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:45'),
(4, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:46'),
(5, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:47'),
(6, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:48'),
(7, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 37, '120550', '0000-00-00', NULL, NULL, '', '2025-05-31 11:35:49'),
(8, NULL, 'Faheem', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '379853745983759837598374598374', 37, '120550', '1899-11-29', NULL, NULL, '', '2025-06-14 07:25:13'),
(9, NULL, 'Faheem', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '379853745983759837598374598374', 37, '120550', '1899-11-29', NULL, NULL, '', '2025-06-14 07:25:23'),
(10, NULL, 'Faheem', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '379853745983759837598374598374', 37, '120550', '1899-11-29', NULL, NULL, '', '2025-06-14 07:25:47'),
(11, NULL, 'Faheem', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '379853745983759837598374598374', 37, '120550', '1899-11-29', NULL, NULL, '', '2025-06-14 07:25:48'),
(12, NULL, 'Faheem', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', '379853745983759837598374598374', 37, '120550', '1899-11-29', NULL, NULL, '', '2025-06-14 07:26:17');

-- --------------------------------------------------------

--
-- Table structure for table `reward_nft`
--

CREATE TABLE `reward_nft` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `wallet` varchar(42) DEFAULT NULL,
  `hash` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `previewLink` varchar(255) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reward_nft`
--

INSERT INTO `reward_nft` (`id`, `image`, `name`, `wallet`, `hash`, `status`, `type`, `date`, `previewLink`, `created_by`, `created_on`) VALUES
(1, './images/cat.png', 'Smart Circus', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 'Awarded', 'Compaign Winner', NULL, 'https://localhost:3000/nft/1', '', '2025-05-31 10:55:26'),
(2, './images/dog.png', 'Smart Circus 33', '0xd7f2cg...j7H8k9L', '379853745983759837598374598374', 'Awarded', 'Compaign Winner', NULL, 'https://localhost:3000/nft/1', '', '2025-05-31 10:56:33');

-- --------------------------------------------------------

--
-- Table structure for table `reward_top_tier`
--

CREATE TABLE `reward_top_tier` (
  `id` int(11) NOT NULL,
  `position` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `wallet` varchar(45) DEFAULT NULL,
  `transactions` int(11) DEFAULT NULL,
  `amount` varchar(50) DEFAULT NULL,
  `registration` date DEFAULT NULL,
  `last_transaction_date` date DEFAULT NULL,
  `potential_winning` varchar(50) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reward_top_tier`
--

INSERT INTO `reward_top_tier` (`id`, `position`, `name`, `wallet`, `transactions`, `amount`, `registration`, `last_transaction_date`, `potential_winning`, `created_by`, `created_on`) VALUES
(1, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:49:13'),
(2, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:49:17'),
(3, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:49:52'),
(4, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:51:51'),
(5, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:52:42'),
(6, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:53:01'),
(7, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:53:42'),
(8, NULL, 'Smart Circus', '0xd7f2cg...j7H8k9L', NULL, '$120,550', '0000-00-00', NULL, '15230', '', '2025-05-31 12:53:43');

-- --------------------------------------------------------

--
-- Table structure for table `staking`
--

CREATE TABLE `staking` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `wallet` varchar(45) DEFAULT NULL,
  `staked_amount` decimal(20,2) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `voting_power` float DEFAULT NULL,
  `indeks` int(11) NOT NULL,
  `hash` varchar(150) DEFAULT 'NULL',
  `status` varchar(12) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `staking`
--

INSERT INTO `staking` (`id`, `name`, `wallet`, `staked_amount`, `start_date`, `end_date`, `duration`, `voting_power`, `indeks`, `hash`, `status`, `created_by`, `created_on`) VALUES
(68, 'some name', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 21768.13, '2025-06-15 01:56:22', '2025-06-16 01:56:22', '1', 2, 39, '2dtFsx1sLxCniSmmJRWBzsXp2tBjZPs6WZ8GMaT8whfRFPjReKiHJFhqEmpTg5huP7MkZ3o1ExdDVnvJM6v89rvC', 'un', 'admin2', '2025-06-14 20:56:31'),
(69, 'Sqwdr', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 7752.85, '2025-06-15 02:02:17', '2025-06-16 02:02:17', '1', 0, 40, '2RLmDCnrYwS9qZMERV382Rottv7Vth6tMHQAkVJCCNH8Sc4ZRvMUFkLMwU2rj6Ayduw2xW2VdjiC9frT3JS44btj', 'ur', 'admin2', '2025-06-14 21:02:19'),
(70, 'Cryptohead', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 7676.28, '2025-06-15 02:18:25', '2025-06-16 02:18:25', '1', 0, 41, '22tUT39uvrvtVrv5ppfvnBjyMerkr1ti4R3mtm4hMA8WR48j8UsjzBpbSiEwFqDMGufXyGsyXDphnc38ugydxPV7', NULL, 'admin2', '2025-06-14 21:18:27'),
(71, 'JonCrypto', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 31992.61, '2025-06-16 00:58:26', '2025-06-17 00:58:26', '1', 3, 42, '2G1DwbQFkCzKPfHUbDStvEvJbAbUMixw8ave7YrXeeRcv1jgrpjigQJzsnsP7RhhP4TsnrQaQkJQTqiomscnSLhs', NULL, 'admin2', '2025-06-15 19:58:28'),
(72, 'DogeRich', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 3000.00, '2025-06-16 05:13:40', '2025-06-17 05:13:40', '1', 0, 43, 'aRp8rneXTRdhZDe1jhcJeGcUxWMpvwjwdFVmqSQgrtR8mi4irv96wfLSri6ZhHkKtNJ4K4A5Tb8Qx5rGbbAtRyo', NULL, 'admin2', '2025-06-16 00:13:42');

-- --------------------------------------------------------

--
-- Table structure for table `top_wallets`
--

CREATE TABLE `top_wallets` (
  `id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `wallet` varchar(45) DEFAULT NULL,
  `volume` bigint(20) DEFAULT NULL,
  `winnings` bigint(20) DEFAULT NULL,
  `created_by` varchar(30) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `top_wallets`
--

INSERT INTO `top_wallets` (`id`, `username`, `wallet`, `volume`, `winnings`, `created_by`, `created_on`) VALUES
(1, 'Shoaib', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 12121, 121212, '', '2025-05-30 18:30:59'),
(2, 'Shaheen', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 23432, 121212, '', '2025-05-30 18:46:04'),
(3, 'Wazir', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 345345, 3412, '', '2025-05-31 10:08:10'),
(4, 'Zahid Gul', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 345345, 3412, '', '2025-05-31 10:08:35'),
(5, 'Faqir Md', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 345345, 3412, '', '2025-05-31 10:09:11'),
(6, 'Laila Khan', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 345345, 3412, '', '2025-05-31 10:09:42'),
(7, '', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', 345345, 3412, '', '2025-06-14 07:26:53');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tx_type` varchar(50) NOT NULL,
  `tx_hash` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` varchar(52) NOT NULL DEFAULT 'user',
  `permissions` varchar(52) DEFAULT NULL,
  `password` varchar(160) DEFAULT NULL,
  `access_pin` varchar(10) DEFAULT NULL,
  `salt` varchar(160) DEFAULT NULL,
  `refreshToken` varchar(500) DEFAULT NULL,
  `wallet` varchar(45) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `transactions` int(11) DEFAULT NULL,
  `balance` bigint(20) DEFAULT NULL,
  `registration` date DEFAULT NULL,
  `last_transactions` date DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `created_by` varchar(30) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `email`, `role`, `permissions`, `password`, `access_pin`, `salt`, `refreshToken`, `wallet`, `image`, `transactions`, `balance`, `registration`, `last_transactions`, `status`, `last_login`, `created_by`, `created_on`) VALUES
(1, 'admin', 'Faheem', NULL, 'admin', '', '$2b$10$ZLTEEea2TKx.j5Y1t92TFO58g2CTYLlwgWVuBp2FFlZiV.06QouG2', '', '$2b$10$ZLTEEea2TKx.j5Y1t92TFO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUwOTE3MDY1LCJleHAiOjE3NTM1MDkwNjV9.E9_--qm2JAEa0UDWBDIO3-o5GPAqZpdRCG1SpVynuO8', 'FYxU8CeLryRTZLab4kG2spNcWtvMr4nZDU7PVV3YrLwU', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2025-05-30 18:29:54'),
(8, 'admin2', NULL, NULL, 'admin', '', '', '', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzUxMDAzOTE1LCJleHAiOjE3NTM1OTU5MTV9.mhl6Xg9cWQaMyhyKPjF2EPRZXa0Sn6Ppt4AFR6BvZeg', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiU', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2025-05-30 18:29:54'),
(9, 'user2', NULL, NULL, 'user', '', 'pass2', '', '', '', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiV', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2025-05-30 18:29:54'),
(10, 'user3', NULL, NULL, 'user', '', 'pass3', '', '', '', 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '2025-05-30 18:29:54'),
(13, NULL, NULL, NULL, 'user', NULL, NULL, NULL, NULL, NULL, 'A7rqWKWCo6ykAcFQcu7oeqVm18YgP3jmwCdc5F7iVEiT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-06-30 18:49:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `causes`
--
ALTER TABLE `causes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `charity_lottery_winner`
--
ALTER TABLE `charity_lottery_winner`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reward_charity_lottery`
--
ALTER TABLE `reward_charity_lottery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reward_nft`
--
ALTER TABLE `reward_nft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reward_top_tier`
--
ALTER TABLE `reward_top_tier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staking`
--
ALTER TABLE `staking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_wallets`
--
ALTER TABLE `top_wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `publicKey` (`wallet`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `causes`
--
ALTER TABLE `causes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `charity_lottery_winner`
--
ALTER TABLE `charity_lottery_winner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reward_charity_lottery`
--
ALTER TABLE `reward_charity_lottery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `reward_nft`
--
ALTER TABLE `reward_nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reward_top_tier`
--
ALTER TABLE `reward_top_tier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `staking`
--
ALTER TABLE `staking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `top_wallets`
--
ALTER TABLE `top_wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
