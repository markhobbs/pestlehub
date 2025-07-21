-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jul 21, 2025 at 07:13 PM
-- Server version: 5.7.44
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pestle_DB`
--
CREATE DATABASE IF NOT EXISTS `pestle_DB` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `pestle_DB`;

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `bookmarks_ID` int(5) NOT NULL,
  `saved_IDX` varchar(30) NOT NULL,
  `username` varchar(40) NOT NULL,
  `type` varchar(20) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dish`
--

CREATE TABLE `dish` (
  `dish_ID` int(11) NOT NULL,
  `pID` varchar(30) DEFAULT NULL,
  `category` varchar(20) DEFAULT 'dish',
  `title` varchar(255) NOT NULL,
  `type_ID` int(10) DEFAULT NULL,
  `time_prep` int(9) DEFAULT NULL,
  `time_cook` int(9) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `username` varchar(40) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `protected` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dish`
--

INSERT INTO `dish` (`dish_ID`, `pID`, `category`, `title`, `type_ID`, `time_prep`, `time_cook`, `active`, `username`, `created`, `updated`, `protected`) VALUES
(451, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Chicken Salad', NULL, 40, 5, 1, '98865af5-0c9d-444d-864e-c155be0cb066', '2024-11-24 04:53:20', '2024-11-24 04:53:20', 1),
(452, 'g83deedge97oaskmrfys5t', 'dish', 'Lemon, Garlic & Herb Chicken', NULL, 50, 45, 1, '98865af5-0c9d-444d-864e-c155be0cb066', '2024-11-24 06:13:12', '2024-11-24 06:13:12', 1),
(486, 'Qw2Er4Ty6Ui8Op0As9DfG5', 'spice', 'All Spice', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(487, 'Zx8CvBnM6QwErTyUiOpLk9', 'spice', 'Ancho Powder', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(488, 'aB3dE5fG7hJ9kLmN1pQrS2', 'spice', 'Annatto Seeds', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(489, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 'spice', 'Baharat Seasoning', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(490, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 'spice', 'Basil', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:47:45', 1),
(491, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 'spice', 'Bay leaf', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(492, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 'spice', 'Black Pepper', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(493, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 'spice', 'Cardamom', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(494, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 'spice', 'Carom Seed', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(495, 'Vb6Nm8Cx0Zz1Xx2Cv3Bb4V', 'spice', 'Cayenne Pepper', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(496, 'Mn7BgV6cX5zAsDfG4hJk3L', 'spice', 'Celery Seed', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:49:06', 1),
(497, 'Qw5Er7Ty9Ui1Op2As3Df4G', 'spice', 'Chervil', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(498, 'Hj6Kl8Zx0Cv1Bn2Mm3Qw4E', 'spice', 'Chia Seed', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(499, 'Rt5Yy7Uu9Ii1Oo2Pp3Aa4S', 'spice', 'Chicory', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(500, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 'spice', 'Chili Powder', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(501, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 'spice', 'Chinese Five-Spice', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(502, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 'spice', 'Chipotle Powder', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(503, 'Aa5Ss7Dd9Ff1Gg2Hh3Jj4K', 'spice', 'Chives', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(504, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 'spice', 'Coriander', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(505, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 'spice', 'Cinnamon', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(506, 'aP4kL9mN2bV3cX1zA5sD7fG', 'spice', 'Cloves', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(507, 'hJ6kL8mN0bV1cX2zA3sD5f', 'spice', 'Coriander Seed', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(508, 'G4hJ5kL6mN7bV8cX9zA0sD1', 'spice', 'Cumin', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(509, 'fG2hJ3kL4mN5bV6cX7zA8sD', 'spice', 'Curry Leaf', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(510, 'fE9dC0bV1nM2xZ3aS4dF5gH', 'spice', 'Curry Powder', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:52:39', 1),
(511, 'jK6mN7bV8cX9zA0sD1fG2hJ', 'spice', 'Dill', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(512, 'kL3mN4bV5cX6zA7sD8fG9hJ', 'spice', 'Dukkah', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(513, 'mN1bV2cX3zA4sD5fG6hJ7kL', 'spice', 'Elderflower', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(514, 'nM8xZ9aS0dF1gH2jK3mN4bV', 'spice', 'Fenugreek', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(515, 'oP5sD6fG7hJ8kL9mN0bV1cX', 'spice', 'Flax Seeds', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(516, 'pQ2rS3tU4vW5xY6zA7sD8fG', 'spice', 'Garam Masala', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(517, 'qR9sT8uV1wX2yZ3aS4dF5gH', 'spice', 'Garlic Powder', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(518, 'rT6uV7wX8yZ9aS0dF1gH2jK', 'spice', 'Ginger Powder', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(519, 'sD3fG4hJ5kL6mN7bV8cX9zA', 'spice', 'Gochugaru', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(520, 'tU0vW1xY2zA3sD4fG5hJ6kL', 'spice', 'Grains Of Paradise', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(521, 'uV7wX8yZ9aS0dF1gH2jK3mN', 'spice', 'Herbes De Provence', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(522, 'vW4xY5zA6sD7fG8hJ9kL0mN', 'spice', 'Holy Basil', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(523, 'wX1yZ2aS3dF4gH5jK6mN7bV', 'spice', 'Kaffir Lime Leaves', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(524, 'xY8zA9sD0fG1hJ2kL3mN4bV', 'spice', 'Kosher Salt', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(525, 'yZ5aS4dF7gH8jK8mN0bV1nX', 'spice', 'Lavender', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(526, 'zC2sD3fG4hJ5kL6mN7bV8cX', 'spice', 'Lemon Basil', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(527, 'yZ5aS6dF7gH8jK9mN0bV1cX', 'spice', 'Lemon Thyme', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(528, 'zA2sD3fH4hJ5kL5mN7bV8cX', 'spice', 'Lemongrass', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(529, 'yZ8aS6dF7gH8jK9mN0bV1cX', 'spice', 'Loomi', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(530, 'zA2sD3fG4hN5kL6mN7bV8cX', 'spice', 'Lovage', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(531, 'yZ5aS3dF7gH8jK9mN0bV1cX', 'spice', 'Mace', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(532, 'zB2sD3fG3hJ5kL7mN7bV8cX', 'spice', 'Mahlab', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(533, 'aS9dF0gH1jK2mN3bV4cX5zA', 'spice', 'Marjoram', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(534, 'bV6cX7zA8sD9fG0hJ1kL2mN', 'spice', 'Mint', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(535, 'cX3zA4sD5fG6hJ7kL8mN9bV', 'spice', 'Mojo seasoning', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(536, 'dF1gH2jK3mN4bV5cX6zA7sD', 'spice', 'Mustard powder', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(537, 'eG8hJ9kL0mN1bV2cX3zA4sD', 'spice', 'Nutmeg', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(538, 'fG5hJ6kL7mN8bV9cX0zA1sD', 'spice', 'Old Bay Seasoning', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(539, 'gH2jK3mN4bV5cX6zA7sD8fG', 'spice', 'Oregano', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:59:53', 1),
(540, 'hJ9kL0mN1bV2cX3zA4sD5fG', 'spice', 'Paprika', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(541, 'h56kL0mN1bV2cX3zA4sD5fG', 'spice', 'Parsley', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(542, 'h57kL0mN1bV2cX3zA4sD5fG', 'spice', 'Pickling Salt', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(543, 'hJ9kL0mN1bV2cX3zf5sD5fG', 'spice', 'Pickling Spice', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(544, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 'spice', 'Pumpkin Pie Spice', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(545, 'fG5hJ6617mN8bV9cX0zA1sD', 'spice', 'Rosemary', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(546, 'fG5hJ6kL7mN62V9cX0zA1sD', 'spice', 'Safflower', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(547, 'fG5hJ6kL7mN63V9cX0zA1sD', 'spice', 'Saffron', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(548, 'fG5hJ6kL7mN8649cX0zA1sD', 'spice', 'Sage', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(549, 'fG5hJ6kL76r8bV9cX0zA1sD', 'spice', 'Sea Salt', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(550, 'fG5hJ6kL7mNggV9cX0zA1sD', 'spice', 'Smoked Paprika', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(551, 'fG5hJ67L7mN8bV9cX0zA1sD', 'spice', 'Star Anise', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(552, 'fG5hJ6kL7mN8bV68X0zA1sD', 'spice', 'Sumac', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(553, 'fG5hJ98L7mN8bV6cX0zA1sD', 'spice', 'Summer Savory', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(554, 'fG5hJ6kL7mN8b70cX0zA1sD', 'spice', 'Tarragon', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(555, 'fG5hJ6kL71N8bV9cX0zA1sD', 'spice', 'Thai basil', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(556, 'fG5hJ6kL7m73bV9cX0nA1sD', 'spice', 'Thyme', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(557, 'fG5h73kL7mNpbV9cX0zA1sD', 'spice', 'Turmeric', 1, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(558, 'fG5hJ6kL7mN8b74cX0zA1sD', 'spice', 'Water Hyssop', 2, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(559, 'fG5h75kL7mN8bV9cX0zA1sD', 'spice', 'Zaatar Seasoning Blend', 3, NULL, NULL, 1, '', '2024-07-21 07:27:56', '2024-07-21 07:27:56', 1),
(560, '83d6edaTsKmrfyge97os6g', 'spice', 'Ras El Hanout', NULL, NULL, NULL, 1, '', '2024-12-01 15:26:31', '2024-12-01 15:26:31', 1);
-- --------------------------------------------------------

--
-- Table structure for table `email_log`
--

CREATE TABLE `email_log` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `email_queue`
--

CREATE TABLE `email_queue` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `flavour`
--

CREATE TABLE `flavour` (
  `flavour_ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flavour`
--

INSERT INTO `flavour` (`flavour_ID`, `name`) VALUES
(1, 'Aromatic'),
(2, 'Peppery'),
(3, 'Savory'),
(4, 'Spicy'),
(5, 'Earthy'),
(6, 'Smoky'),
(7, 'Sweet'),
(8, 'Nutty'),
(9, 'Warm'),
(10, 'Fragrant'),
(11, 'Herbal'),
(12, 'Bitter'),
(13, 'Piney'),
(14, 'Pungent'),
(15, 'Woody'),
(16, 'Citrusy'),
(17, 'Strong'),
(18, 'Minty'),
(19, 'Rich'),
(20, 'Garlicky'),
(21, 'Oniony'),
(22, 'Bright'),
(23, 'Fresh'),
(24, 'Bold'),
(25, 'Tangy'),
(26, 'Floral'),
(27, 'Toasty'),
(28, 'Exotic'),
(29, 'Potent'),
(30, 'Clean'),
(31, 'Salty'),
(32, 'Delicate'),
(33, 'Mild'),
(34, 'Lemony'),
(35, 'Sharp'),
(36, 'Sour'),
(37, 'Fruity'),
(38, 'Cooling'),
(39, 'Metallic'),
(40, 'Tart'),
(41, 'Bittersweet');

-- --------------------------------------------------------

--
-- Table structure for table `flavours`
--

CREATE TABLE `flavours` (
  `flavours_ID` int(11) NOT NULL,
  `spice_ID` varchar(30) NOT NULL,
  `flavour_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flavours`
--

INSERT INTO `flavours` (`flavours_ID`, `spice_ID`, `flavour_ID`) VALUES
(35, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 14),
(36, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 4),
(37, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 7),
(54, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 10),
(55, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 4),
(56, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 7),
(57, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 9),
(61, 'Aa5Ss7Dd9Ff1Gg2Hh3Jj4K', 20),
(62, 'Aa5Ss7Dd9Ff1Gg2Hh3Jj4K', 21),
(63, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 22),
(64, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 16),
(65, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 23),
(101, 'mN1bV2cX3zA4sD5fG6hJ7kL', 16),
(102, 'mN1bV2cX3zA4sD5fG6hJ7kL', 26),
(103, 'mN1bV2cX3zA4sD5fG6hJ7kL', 10),
(108, 'oP5sD6fG7hJ8kL9mN0bV1cX', 8),
(109, 'oP5sD6fG7hJ8kL9mN0bV1cX', 27),
(118, 'rT6uV7wX8yZ9aS0dF1gH2jK', 1),
(119, 'rT6uV7wX8yZ9aS0dF1gH2jK', 14),
(120, 'rT6uV7wX8yZ9aS0dF1gH2jK', 4),
(121, 'rT6uV7wX8yZ9aS0dF1gH2jK', 7),
(122, 'rT6uV7wX8yZ9aS0dF1gH2jK', 9),
(123, 'rT6uV7wX8yZ9aS0dF1gH2jK', 15),
(130, 'uV7wX8yZ9aS0dF1gH2jK3mN', 5),
(131, 'uV7wX8yZ9aS0dF1gH2jK3mN', 26),
(132, 'uV7wX8yZ9aS0dF1gH2jK3mN', 18),
(133, 'vW4xY5zA6sD7fG8hJ9kL0mN', 28),
(134, 'vW4xY5zA6sD7fG8hJ9kL0mN', 10),
(135, 'vW4xY5zA6sD7fG8hJ9kL0mN', 2),
(136, 'vW4xY5zA6sD7fG8hJ9kL0mN', 9),
(160, 'yZ5aS3dF7gH8jK9mN0bV1cX', 16),
(161, 'yZ5aS3dF7gH8jK9mN0bV1cX', 14),
(162, 'yZ5aS3dF7gH8jK9mN0bV1cX', 9),
(163, 'zA2sD3fG4hJ5kL6mN7bV8cX', 26),
(164, 'zA2sD3fG4hJ5kL6mN7bV8cX', 37),
(165, 'zA2sD3fG4hJ5kL6mN7bV8cX', 8),
(211, 'fG5hJ6617mN8bV9cX0zA1sD', 1),
(212, 'fG5hJ6617mN8bV9cX0zA1sD', 2),
(213, 'fG5hJ6617mN8bV9cX0zA1sD', 13),
(214, 'fG5hJ6617mN8bV9cX0zA1sD', 14),
(215, 'fG5hJ6617mN8bV9cX0zA1sD', 15),
(228, 'fG5hJ6kL7mNggV9cX0zA1sD', 6),
(229, 'fG5hJ6kL7mNggV9cX0zA1sD', 4),
(230, 'fG5hJ6kL7mNggV9cX0zA1sD', 7),
(256, 'fG5hJ6kL7mN8b74cX0zA1sD', 12),
(268, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 16),
(269, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 2),
(270, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 14),
(271, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 9),
(272, 'Vb6Nm8Cx0Zz1Xx2Cv3Bb4V', 2),
(273, 'Vb6Nm8Cx0Zz1Xx2Cv3Bb4V', 14),
(274, 'Vb6Nm8Cx0Zz1Xx2Cv3Bb4V', 4),
(279, 'Qw5Er7Ty9Ui1Op2As3Df4G', 12),
(280, 'Qw5Er7Ty9Ui1Op2As3Df4G', 18),
(281, 'Hj6Kl8Zx0Cv1Bn2Mm3Qw4E', 8),
(282, 'Rt5Yy7Uu9Ii1Oo2Pp3Aa4S', 12),
(283, 'Rt5Yy7Uu9Ii1Oo2Pp3Aa4S', 19),
(284, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 5),
(285, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 6),
(286, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 4),
(287, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 1),
(288, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 10),
(289, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 4),
(290, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 7),
(291, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 9),
(292, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 15),
(293, 'jK6mN7bV8cX9zA0sD1fG2hJ', 1),
(294, 'jK6mN7bV8cX9zA0sD1fG2hJ', 12),
(295, 'jK6mN7bV8cX9zA0sD1fG2hJ', 16),
(296, 'jK6mN7bV8cX9zA0sD1fG2hJ', 7),
(297, 'kL3mN4bV5cX6zA7sD8fG9hJ', 24),
(298, 'kL3mN4bV5cX6zA7sD8fG9hJ', 5),
(299, 'kL3mN4bV5cX6zA7sD8fG9hJ', 8),
(300, 'kL3mN4bV5cX6zA7sD8fG9hJ', 25),
(301, 'nM8xZ9aS0dF1gH2jK3mN4bV', 12),
(302, 'nM8xZ9aS0dF1gH2jK3mN4bV', 8),
(303, 'nM8xZ9aS0dF1gH2jK3mN4bV', 19),
(304, 'nM8xZ9aS0dF1gH2jK3mN4bV', 7),
(305, 'pQ2rS3tU4vW5xY6zA7sD8fG', 1),
(306, 'pQ2rS3tU4vW5xY6zA7sD8fG', 26),
(307, 'pQ2rS3tU4vW5xY6zA7sD8fG', 3),
(308, 'pQ2rS3tU4vW5xY6zA7sD8fG', 4),
(309, 'pQ2rS3tU4vW5xY6zA7sD8fG', 7),
(310, 'pQ2rS3tU4vW5xY6zA7sD8fG', 9),
(313, 'sD3fG4hJ5kL6mN7bV8cX9zA', 6),
(314, 'sD3fG4hJ5kL6mN7bV8cX9zA', 4),
(315, 'sD3fG4hJ5kL6mN7bV8cX9zA', 7),
(316, 'tU0vW1xY2zA3sD4fG5hJ6kL', 5),
(317, 'tU0vW1xY2zA3sD4fG5hJ6kL', 4),
(318, 'tU0vW1xY2zA3sD4fG5hJ6kL', 9),
(319, 'wX1yZ2aS3dF4gH5jK6mN7bV', 16),
(320, 'wX1yZ2aS3dF4gH5jK6mN7bV', 26),
(321, 'wX1yZ2aS3dF4gH5jK6mN7bV', 29),
(324, 'aS9dF0gH1jK2mN3bV4cX5zA', 16),
(325, 'aS9dF0gH1jK2mN3bV4cX5zA', 13),
(326, 'aS9dF0gH1jK2mN3bV4cX5zA', 9),
(335, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 1),
(336, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 8),
(337, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 2),
(338, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 14),
(339, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 7),
(340, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 9),
(357, 'fG5h73kL7mNpbV9cX0zA1sD', 12),
(358, 'fG5h73kL7mNpbV9cX0zA1sD', 16),
(359, 'fG5h73kL7mNpbV9cX0zA1sD', 5),
(360, 'fG5h73kL7mNpbV9cX0zA1sD', 14),
(369, 'hJ6kL8mN0bV1cX2zA3sD5f', 1),
(370, 'hJ6kL8mN0bV1cX2zA3sD5f', 16),
(371, 'hJ6kL8mN0bV1cX2zA3sD5f', 5),
(372, 'G4hJ5kL6mN7bV8cX9zA0sD1', 1),
(373, 'G4hJ5kL6mN7bV8cX9zA0sD1', 5),
(374, 'G4hJ5kL6mN7bV8cX9zA0sD1', 14),
(375, 'G4hJ5kL6mN7bV8cX9zA0sD1', 35),
(376, 'G4hJ5kL6mN7bV8cX9zA0sD1', 7),
(377, 'G4hJ5kL6mN7bV8cX9zA0sD1', 9),
(408, 'aP4kL9mN2bV3cX1zA5sD7fG', 1),
(409, 'aP4kL9mN2bV3cX1zA5sD7fG', 12),
(410, 'aP4kL9mN2bV3cX1zA5sD7fG', 14),
(411, 'aP4kL9mN2bV3cX1zA5sD7fG', 7),
(412, 'aP4kL9mN2bV3cX1zA5sD7fG', 9),
(415, 'qR9sT8uV1wX2yZ3aS4dF5gH', 14),
(416, 'qR9sT8uV1wX2yZ3aS4dF5gH', 7),
(420, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 1),
(421, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 5),
(422, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 6),
(423, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 9),
(424, 'Zx8CvBnM6QwErTyUiOpLk9', 5),
(425, 'Zx8CvBnM6QwErTyUiOpLk9', 6),
(426, 'Zx8CvBnM6QwErTyUiOpLk9', 4),
(427, 'Zx8CvBnM6QwErTyUiOpLk9', 7),
(428, 'Qw2Er4Ty6Ui8Op0As9DfG5', 1),
(429, 'Qw2Er4Ty6Ui8Op0As9DfG5', 2),
(430, 'Qw2Er4Ty6Ui8Op0As9DfG5', 3),
(431, 'Qw2Er4Ty6Ui8Op0As9DfG5', 4),
(432, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 1),
(433, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 12),
(434, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 5),
(435, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 9),
(436, 'aB3dE5fG7hJ9kLmN1pQrS2', 8),
(437, 'aB3dE5fG7hJ9kLmN1pQrS2', 2),
(438, 'aB3dE5fG7hJ9kLmN1pQrS2', 6),
(439, 'aB3dE5fG7hJ9kLmN1pQrS2', 7),
(447, 'fG2hJ3kL4mN5bV6cX7zA8sD', 1),
(448, 'fG2hJ3kL4mN5bV6cX7zA8sD', 16),
(449, 'fG2hJ3kL4mN5bV6cX7zA8sD', 11),
(458, 'fG5hJ6kL7mN8bV9cX0zA1sD', 4),
(459, 'fG5hJ6kL7mN8bV9cX0zA1sD', 7),
(460, 'fG5hJ6kL7mN8bV9cX0zA1sD', 9),
(461, 'dF1gH2jK3mN4bV5cX6zA7sD', 14),
(462, 'dF1gH2jK3mN4bV5cX6zA7sD', 4),
(463, 'dF1gH2jK3mN4bV5cX6zA7sD', 25),
(464, 'dF1gH2jK3mN4bV5cX6zA7sD', 9),
(465, 'fG5h75kL7mN8bV9cX0zA1sD', 16),
(466, 'fG5h75kL7mN8bV9cX0zA1sD', 10),
(467, 'fG5h75kL7mN8bV9cX0zA1sD', 8),
(468, 'fG5h75kL7mN8bV9cX0zA1sD', 17),
(469, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 5),
(470, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 2),
(471, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 13),
(472, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 14),
(473, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 4),
(474, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 9),
(475, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 15),
(482, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 5),
(483, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 8),
(484, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 4),
(485, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 9),
(486, 'xY8zA9sD0fG1hJ2kL3mN4bV', 30),
(487, 'xY8zA9sD0fG1hJ2kL3mN4bV', 31),
(488, 'fG5hJ6kL76r8bV9cX0zA1sD', 22),
(489, 'fG5hJ6kL76r8bV9cX0zA1sD', 30),
(490, 'fG5hJ6kL76r8bV9cX0zA1sD', 31),
(491, 'yZ5aS6dF7gH8jK9mN0bV1cX', 26),
(492, 'yZ5aS6dF7gH8jK9mN0bV1cX', 11),
(493, 'yZ5aS6dF7gH8jK9mN0bV1cX', 7),
(494, 'zA2sD3fG4hJ5kL6mN7bV8cX', 16),
(495, 'zA2sD3fG4hJ5kL6mN7bV8cX', 32),
(496, 'zA2sD3fG4hJ5kL6mN7bV8cX', 33),
(497, 'yZ5aS6dF7gH8jK9mN0bV1cX', 16),
(498, 'yZ5aS6dF7gH8jK9mN0bV1cX', 10),
(499, 'yZ5aS6dF7gH8jK9mN0bV1cX', 34),
(500, 'zA2sD3fG4hJ5kL6mN7bV8cX', 16),
(501, 'zA2sD3fG4hJ5kL6mN7bV8cX', 35),
(502, 'zA2sD3fG4hJ5kL6mN7bV8cX', 25),
(503, 'yZ8aS6dF7gH8jK9mN0bV1cX', 36),
(504, 'yZ8aS6dF7gH8jK9mN0bV1cX', 7),
(509, 'zA2sD3fG4hN5kL6mN7bV8cX', 30),
(510, 'zA2sD3fG4hN5kL6mN7bV8cX', 11),
(511, 'zA2sD3fG4hN5kL6mN7bV8cX', 14),
(512, 'zA2sD3fG4hN5kL6mN7bV8cX', 17),
(513, 'bV6cX7zA8sD9fG0hJ1kL2mN', 30),
(514, 'bV6cX7zA8sD9fG0hJ1kL2mN', 38),
(515, 'bV6cX7zA8sD9fG0hJ1kL2mN', 35),
(516, 'bV6cX7zA8sD9fG0hJ1kL2mN', 7),
(525, 'cX3zA4sD5fG6hJ7kL8mN9bV', 16),
(526, 'cX3zA4sD5fG6hJ7kL8mN9bV', 5),
(527, 'cX3zA4sD5fG6hJ7kL8mN9bV', 2),
(528, 'cX3zA4sD5fG6hJ7kL8mN9bV', 25),
(529, 'eG8hJ9kL0mN1bV2cX3zA4sD', 1),
(530, 'eG8hJ9kL0mN1bV2cX3zA4sD', 5),
(531, 'eG8hJ9kL0mN1bV2cX3zA4sD', 8),
(532, 'eG8hJ9kL0mN1bV2cX3zA4sD', 7),
(533, 'eG8hJ9kL0mN1bV2cX3zA4sD', 9),
(539, 'hJ9kL0mN1bV2cX3zA4sD5fG', 4),
(540, 'hJ9kL0mN1bV2cX3zA4sD5fG', 7),
(541, 'h56kL0mN1bV2cX3zA4sD5fG', 12),
(542, 'h56kL0mN1bV2cX3zA4sD5fG', 22),
(543, 'h57kL0mN1bV2cX3zA4sD5fG', 31),
(544, 'hJ9kL0mN1bV2cX3zf5sD5fG', 7),
(545, 'hJ9kL0mN1bV2cX3zf5sD5fG', 9),
(546, 'fG5hJ6kL7mN62V9cX0zA1sD', 33),
(547, 'fG5hJ6kL7mN62V9cX0zA1sD', 7),
(548, 'fG5hJ6kL7mN63V9cX0zA1sD', 12),
(549, 'fG5hJ6kL7mN63V9cX0zA1sD', 39),
(550, 'fG5hJ6kL7mN63V9cX0zA1sD', 35),
(551, 'fG5hJ6kL7mN8649cX0zA1sD', 1),
(552, 'fG5hJ6kL7mN8649cX0zA1sD', 12),
(553, 'fG5hJ6kL7mN8649cX0zA1sD', 10),
(554, 'fG5hJ6kL7mN8649cX0zA1sD', 3),
(555, 'fG5hJ67L7mN8bV9cX0zA1sD', 12),
(556, 'fG5hJ67L7mN8bV9cX0zA1sD', 14),
(557, 'fG5hJ67L7mN8bV9cX0zA1sD', 7),
(558, 'fG5hJ67L7mN8bV9cX0zA1sD', 9),
(559, 'fG5hJ6kL7mN8bV68X0zA1sD', 16),
(560, 'fG5hJ6kL7mN8bV68X0zA1sD', 37),
(561, 'fG5hJ6kL7mN8bV68X0zA1sD', 40),
(562, 'fG5hJ98L7mN8bV6cX0zA1sD', 33),
(563, 'fG5hJ98L7mN8bV6cX0zA1sD', 2),
(564, 'fG5hJ98L7mN8bV6cX0zA1sD', 13),
(565, 'fG5hJ6kL7mN8b70cX0zA1sD', 1),
(566, 'fG5hJ6kL7mN8b70cX0zA1sD', 41),
(567, 'fG5hJ6kL71N8bV9cX0zA1sD', 16),
(568, 'fG5hJ6kL71N8bV9cX0zA1sD', 2),
(569, 'fG5hJ6kL71N8bV9cX0zA1sD', 4),
(570, 'fG5hJ6kL71N8bV9cX0zA1sD', 9),
(571, 'fG5hJ6kL7m73bV9cX0nA1sD', 5),
(572, 'fG5hJ6kL7m73bV9cX0nA1sD', 18),
(573, 'fG5hJ6kL7m73bV9cX0nA1sD', 2),
(574, 'fG5hJ6kL7m73bV9cX0nA1sD', 7),
(575, 'fG5hJ6kL7m73bV9cX0nA1sD', 9),
(576, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 10),
(577, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 11),
(578, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 7),
(579, 'Mn7BgV6cX5zAsDfG4hJk3L', 12),
(580, 'Mn7BgV6cX5zAsDfG4hJk3L', 16),
(581, 'Mn7BgV6cX5zAsDfG4hJk3L', 11),
(582, 'Mn7BgV6cX5zAsDfG4hJk3L', 17),
(583, 'fE9dC0bV1nM2xZ3aS4dF5gH', 5),
(584, 'fE9dC0bV1nM2xZ3aS4dF5gH', 3),
(585, 'fE9dC0bV1nM2xZ3aS4dF5gH', 7),
(586, 'fE9dC0bV1nM2xZ3aS4dF5gH', 9),
(587, 'gH2jK3mN4bV5cX6zA7sD8fG', 12),
(588, 'gH2jK3mN4bV5cX6zA7sD8fG', 2),
(589, 'gH2jK3mN4bV5cX6zA7sD8fG', 14),
(590, 'gH2jK3mN4bV5cX6zA7sD8fG', 35),
(591, 'gH2jK3mN4bV5cX6zA7sD8fG', 9),
(592, 'zA2sD3fH4hJ5kL5mN7bV8cX', 16),
(593, 'zA2sD3fH4hJ5kL5mN7bV8cX', 35),
(594, 'zA2sD3fH4hJ5kL5mN7bV8cX', 25),
(599, 'zC2sD3fG4hJ5kL6mN7bV8cX', 26),
(600, 'zC2sD3fG4hJ5kL6mN7bV8cX', 11),
(601, 'zC2sD3fG4hJ5kL6mN7bV8cX', 7),
(602, 'zB2sD3fG3hJ5kL7mN7bV8cX', 26),
(603, 'zB2sD3fG3hJ5kL7mN7bV8cX', 37),
(604, 'zB2sD3fG3hJ5kL7mN7bV8cX', 8),
(605, 'yZ5aS4dF7gH8jK8mN0bV1nX', 26),
(606, 'yZ5aS4dF7gH8jK8mN0bV1nX', 11),
(607, 'yZ5aS4dF7gH8jK8mN0bV1nX', 7),
(608, '83d6edaTsKmrfyge97os6g', 28),
(609, '83d6edaTsKmrfyge97os6g', 14),
(610, '83d6edaTsKmrfyge97os6g', 7),
(611, '83d6edaTsKmrfyge97os6g', 9);

-- --------------------------------------------------------

--
-- Table structure for table `ingredient`
--

CREATE TABLE `ingredient` (
  `ingredient_ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredient`
--

INSERT INTO `ingredient` (`ingredient_ID`, `name`, `active`) VALUES
(1, 'Onion Green', 1),
(2, 'Lemon', 1),
(3, 'Olive Oil', 1),
(4, 'Chicken', 1),
(5, 'Lamb', 1),
(6, 'Beef', 1),
(7, 'Yogurt', 1),
(8, 'Egg', 1),
(9, 'Cheese', 1),
(10, 'Onion Red', 1),
(11, 'Onion White', 1),
(12, 'Rice Vinegar', 1),
(13, 'Cabbage', 1),
(14, 'Carrot', 1),
(15, 'Shallots', 1),
(16, 'Garlic', 1),
(17, 'Fish Sauce', 1),
(18, 'Sugar Granulated ', 1),
(19, 'Almond Meal', 1),
(20, 'Almond', 1),
(21, 'Amaranth', 1),
(22, 'Apple', 1),
(23, 'Apricot', 1),
(24, 'Avocado', 1),
(25, 'Bananas', 1),
(26, 'Barley', 1),
(29, 'Beef Tenderloin', 1),
(30, 'Brisket', 1),
(31, 'Buckwheat', 1),
(32, 'Bulgur', 1),
(33, 'Cherries', 1),
(40, 'Chocolate', 1),
(41, 'Coconut', 1),
(42, 'Corn Flour', 1),
(43, 'Cornish Hens', 1),
(44, 'Cornmeal', 1),
(45, 'Duck', 1),
(46, 'Fish', 1),
(47, 'Flax Seeds', 1),
(48, 'Goat', 1),
(53, 'Turkey', 1),
(57, 'Mangos', 1),
(58, 'Millet', 1),
(59, 'Mushroom', 1),
(60, 'Nectarines', 1),
(61, 'Qat Flour', 1),
(62, 'Qats', 1),
(63, 'Peaches', 1),
(64, 'Peanuts', 1),
(65, 'Pears', 1),
(66, 'Pineapples', 1),
(67, 'Plums', 1),
(68, 'Pomegranates', 1),
(69, 'Pork', 1),
(74, 'Quinoa', 1),
(75, 'Sausage', 1),
(76, 'Seafood', 1),
(77, 'Shellfish', 1),
(78, 'Crab', 1),
(80, 'Spelt', 1),
(82, 'White Flour', 1),
(83, 'Self Raising Flour', 1),
(84, 'All Purpose Flour', 1),
(86, 'Veal', 1),
(87, 'Venison', 1),
(88, 'Wild Game', 1),
(89, 'White Rice', 1),
(90, 'Brown Rice', 1),
(91, 'Wild Rice', 1),
(92, 'Panko Breadcrumbs', 1),
(93, 'Pasta', 1),
(94, 'Couscous', 1),
(95, 'Sugar Brown', 1),
(96, 'Sugar Caster', 1),
(97, 'Baking Powder', 1),
(98, 'Active Dry Yeast', 1),
(99, 'Chicken Stock', 1),
(100, 'Beef Stock', 1),
(101, 'Butter', 1),
(102, 'Heavy Cream', 1),
(103, 'Parmesan', 1),
(104, 'Bacon', 1),
(105, 'Celery', 1),
(106, 'Lime', 1),
(107, 'Orange Juice', 1),
(108, 'Vegetable Oil', 1),
(109, 'Malt Vinegar', 1),
(110, 'Mustard', 1),
(111, 'Honey', 1),
(112, 'White Potato', 1),
(114, 'Tomato', 1),
(117, 'Tomato Ketchup', 1),
(118, 'Tomato Purée', 1),
(119, 'Beans', 1),
(120, 'Kidney Beans', 1),
(121, 'Mayonnaise', 1),
(122, 'Groundnut Oil', 1),
(123, 'Raisins', 1),
(124, 'Sesame Oil', 1),
(125, 'Chickpeas', 1),
(126, 'Omani Limes (dried)', 1),
(128, 'Ginger', 1),
(130, 'Dark Soy Sauce', 1),
(131, 'Light Soy Sauce', 1),
(132, 'Rice Wine', 1),
(133, 'Sherry', 1),
(134, 'Dry Sherry', 1),
(135, 'Hoisin Sauce', 1),
(136, 'Chinese Pancakes', 1),
(137, 'Onion Spring', 1),
(138, 'Sugar Light Brown', 1),
(139, 'Cucumber', 1),
(140, 'Scallion', 1),
(141, 'Noodle Rice', 1),
(142, 'Noodle Egg', 1),
(143, 'Noodle Udon', 1),
(144, 'Noodle Soba', 1),
(145, 'Noodle Vermicelli', 0),
(146, 'Noodle Flat Rice', 0),
(147, 'Noodle Ramen', 0),
(148, 'Noodle Shirataki', 0),
(149, 'Pasta Pappardelle', 1),
(150, 'Pasta Conchiglione', 1),
(151, 'Pasta Spaghetti', 1),
(152, 'Pasta Rotini', 1),
(153, 'Pasta Pici', 1),
(154, 'Pasta Orecchiette', 1),
(155, 'Pasta Bucatini', 1),
(156, 'Pasta Ravioli\n', 1),
(157, 'Pasta Linguine\n', 1),
(158, 'Pasta Cavatappi', 1),
(159, 'Pasta Trofie', 1),
(160, 'Pasta Mafalde', 1),
(161, 'Pasta Rigatoni', 1),
(162, 'Iceberg Lettuce', 1),
(163, 'Prawn', 1),
(164, 'Spring Roll Wrappers', 1),
(165, 'Abiu', 1),
(166, 'Açaí', 1),
(167, 'Acerola', 1),
(168, 'Akebi', 1),
(169, 'Ackee', 1),
(170, 'African Cherry Orange', 1),
(171, 'American Mayapple', 1),
(172, 'Aratiles', 1),
(173, 'Araza', 1),
(174, 'Bilberry', 1),
(175, 'Blackberry', 1),
(176, 'Blackcurrant', 1),
(177, 'Black sapote', 1),
(178, 'Blueberry', 1),
(179, 'Boysenberry', 1),
(180, 'Breadfruit', 1),
(181, 'Buddhas Hand', 1),
(182, 'Cactus Pear', 1),
(183, 'Canistel', 1),
(184, 'Catmon', 1),
(185, 'Cempedak', 1),
(186, 'Cherimoya', 1),
(187, 'Cherry', 1),
(188, 'Chico Fruit', 1),
(189, 'Citron', 1),
(190, 'Cloudberry', 1),
(191, 'Coco De Mer', 1),
(192, 'Crab Apple', 1),
(193, 'Cranberry', 1),
(194, 'Currant', 1),
(195, 'Damson', 1),
(196, 'Date', 1),
(197, 'Dragonfruit', 1),
(198, 'Durian', 1),
(199, 'Elderberry', 1),
(200, 'Feijoa', 1),
(201, 'Fig', 1),
(202, 'Finger Lime', 1),
(203, 'Gac', 1),
(204, 'Goji Berry', 1),
(205, 'Gooseberry', 1),
(206, 'Grape', 1),
(207, 'Grapefruit', 1),
(208, 'Grewia Asiatica', 1),
(209, 'Guava', 1),
(210, 'Ghala Fruit', 1),
(211, 'Haws', 1),
(212, 'Honeyberry', 1),
(213, 'Huckleberry', 1),
(214, 'Jabuticaba', 1),
(215, 'Jackfruit', 1),
(216, 'Jambul', 1),
(217, 'Japanese Plum', 1),
(218, 'Jostaberry', 1),
(219, 'Jujube', 1),
(220, 'Juniper Berry', 1),
(221, 'Kaffir Lime', 1),
(222, 'Kiwano', 1),
(223, 'Kiwifruit', 1),
(224, 'Kumquat', 1),
(225, 'Lanzones', 1),
(226, 'Lime', 1),
(227, 'Loganberry', 1),
(228, 'Longan', 1),
(229, 'Loquat', 1),
(230, 'Lulo', 1),
(231, 'Lychee', 1),
(232, 'Magellan Barberry', 1),
(233, 'Macopa', 1),
(234, 'Mamey Apple', 1),
(235, 'Mamey Sapote', 1),
(236, 'Mangosteen', 1),
(237, 'Marionberry', 1),
(238, 'Medlar', 1),
(239, 'Melon', 1),
(240, 'Cantaloupe', 1),
(241, 'Galia Melon', 1),
(242, 'Honeydew', 1),
(243, 'Mouse Melon', 1),
(244, 'Muskmelon', 1),
(245, 'Watermelon', 1),
(246, 'Miracle Fruit', 1),
(247, 'Momordica Fruit', 1),
(248, 'Monstera Deliciosa', 1),
(249, 'Mulberry', 1),
(250, 'Nance', 1),
(251, 'Blood Orange', 1),
(252, 'Clementine', 1),
(253, 'Mandarine', 1),
(254, 'Tangerine', 1),
(255, 'Papaya', 1),
(256, 'Passionfruit', 1),
(257, 'Pawpaw', 1),
(258, 'Pear', 1),
(259, 'Persimmon', 1),
(260, 'Plantain', 1),
(261, 'Prune', 1),
(262, 'Pineberry', 1),
(263, 'Plumcot', 1),
(264, 'Pomelo', 1),
(265, 'Quince', 1),
(266, 'Raspberry', 1),
(267, 'Salmonberry', 1),
(268, 'Rambutan', 1),
(269, 'Redcurrant', 1),
(270, 'Rose Apple', 1),
(271, 'Salal Berry', 1),
(272, 'Salak', 1),
(273, 'Santol', 1),
(274, 'Sapodilla', 1),
(275, 'Sapote', 1),
(276, 'Sarguelas', 1),
(277, 'Satsuma', 1),
(278, 'Sloe', 1),
(279, 'Soursop', 1),
(280, 'Star Apple', 1),
(281, 'Star Fruit', 1),
(282, 'Strawberry', 1),
(283, 'Sugar Apple', 1),
(284, 'Suriname cherry', 1),
(285, 'Tamarillo', 1),
(286, 'Tamarind', 1),
(287, 'Tangelo', 1),
(288, 'Tayberry', 1),
(289, 'Thimbleberry', 1),
(290, 'Ugli Fruit', 1),
(291, 'White currant', 1),
(292, 'White sapote', 1),
(293, 'Ximenia', 1),
(294, 'Yuzu', 1),
(295, 'Bell Pepper', 1),
(296, 'Carolina Reaper', 1),
(297, 'Chili Pepper', 1),
(298, 'Corn Kernel', 1),
(299, 'Eggplant', 1),
(300, 'Jalapeño', 1),
(301, 'Olive', 1),
(302, 'Pea', 1),
(303, 'Pumpkin', 1),
(304, 'Squash', 1),
(305, 'Zucchini', 1),
(306, 'Artichoke', 1),
(307, 'Aubergine', 1),
(308, 'Asparagus', 1),
(309, 'Broccoflower', 1),
(310, 'Broccoli', 1),
(311, 'Brussels Sprouts', 1),
(312, 'Kohlrabi', 1),
(313, 'Savoy Cabbage', 1),
(314, 'Red Cabbage', 1),
(315, 'Sour Cabbage', 1),
(316, 'Cauliflower', 1),
(317, 'Dillettuce', 1),
(318, 'Dilloriander', 1),
(319, 'Endive', 1),
(320, 'Fiddleheads', 1),
(321, 'Frisee', 1),
(322, 'Fennel', 1),
(323, 'Greens', 1),
(324, 'Beet Greens', 1),
(325, 'Bok Choy', 1),
(326, 'Chard', 1),
(327, 'Collard Greens', 1),
(328, 'Kale', 1),
(329, 'Mustard Greens', 1),
(330, 'Spinach', 1),
(331, 'Alfalfa Sprouts', 1),
(332, 'Azuki Beans', 1),
(333, 'Bean Sprouts', 1),
(334, 'Black Beans', 1),
(335, 'Black-Eyed Peas', 1),
(336, 'Borlotti Bean', 1),
(337, 'Broad Beans', 1),
(338, 'Chickpeas', 1),
(339, 'Green Beans', 1),
(340, 'Kidney Beans', 1),
(341, 'Lentils', 1),
(342, 'Lima Beans', 1),
(343, 'Mung Beans', 1),
(344, 'Navy Beans', 1),
(345, 'Pinto Beans', 1),
(346, 'Runner Beans', 1),
(347, 'Split Peas', 1),
(348, 'Soy Beans', 1),
(349, 'Peas', 1),
(350, 'Mange Tout', 1),
(351, 'Mushrooms', 1),
(352, 'Nettles', 1),
(353, 'Spinach', 1),
(354, 'Oca', 1),
(355, 'Okra', 1),
(356, 'Chives', 1),
(357, 'Leek', 1),
(358, 'Habanero', 1),
(359, 'Tabasco Pepper', 1),
(360, 'Radicchio', 1),
(361, 'Rhubarb', 1),
(362, 'Root Vegetables', 1),
(363, 'Beetroot', 1),
(364, 'Mangelwurzel', 1),
(365, 'Celeriac', 1),
(366, 'Corms', 1),
(367, 'Eddoe', 1),
(368, 'Konjac', 1),
(369, 'Taro', 1),
(370, 'Water Chestnut', 1),
(371, 'Parsnip', 1),
(372, 'Swede', 1),
(373, 'Radish', 1),
(374, 'Wasabi', 1),
(375, 'Horseradish', 1),
(376, 'Daikon', 1),
(377, 'Turnip', 1),
(378, 'Tubers', 1),
(379, 'Jicama', 1),
(380, 'Jerusalem Artichoke', 1),
(381, 'Kumara', 1),
(382, 'Potato', 1),
(383, 'Sour Yam', 1),
(384, 'Sweet Potato', 1),
(385, 'Sweet Yam', 1),
(386, 'Yam', 1),
(387, 'Salsify', 1),
(388, 'Skirret', 1),
(389, 'Succotash', 1),
(390, 'Sweetcorn', 1),
(391, 'Topinambur', 1),
(392, 'Squashes', 1),
(393, 'Acorn Squash', 1),
(394, 'Bitter Melon', 1),
(395, 'Butternut Squash', 1),
(396, 'Banana Squash', 1),
(397, 'Courgette', 1),
(398, 'Delicata', 1),
(399, 'Gem Squash', 1),
(400, 'Hubbard Squash', 1),
(401, 'Marrow', 1),
(402, 'Spaghetti Squash', 1),
(403, 'Tat Soi', 1),
(404, 'Tomatillo', 1),
(405, 'Watercress', 1),
(406, 'All Spice', 1),
(407, 'Ancho Powder', 1),
(408, 'Annatto Seeds', 1),
(409, 'Baharat Seasoning', 1),
(410, 'Basil', 1),
(411, 'Bay Leaf', 1),
(412, 'Black Pepper', 1),
(413, 'Cardamom', 1),
(414, 'Carom Seed', 1),
(415, 'Cayenne Pepper', 1),
(416, 'Celery Seed', 1),
(417, 'Chervil', 1),
(418, 'Chia Seed', 1),
(419, 'Chicory', 1),
(420, 'Chili powder', 1),
(421, 'Chinese five-spice', 1),
(422, 'Chipotle powder', 1),
(423, 'Chives', 1),
(424, 'Coriander', 1),
(425, 'Cinnamon', 1),
(426, 'Cloves', 1),
(427, 'Coriander Seed', 1),
(428, 'Cumin', 1),
(429, 'Curry Leaf', 1),
(430, 'Curry Powder', 1),
(431, 'Dill', 1),
(432, 'Dukkah', 1),
(433, 'Elderflower', 1),
(434, 'Fenugreek', 1),
(435, 'Flax Seeds', 1),
(436, 'Garam Masala', 1),
(437, 'Garlic Powder', 1),
(438, 'Ginger Powder', 1),
(439, 'Gochugaru', 1),
(440, 'Grains Of Paradise', 1),
(441, 'Herbes De Provence', 1),
(442, 'Holy Basil', 1),
(443, 'Kaffir Lime leaves', 1),
(444, 'Kosher Salt', 1),
(445, 'Lavender', 1),
(446, 'Lemon Basil', 1),
(447, 'Lemon Thyme', 1),
(448, 'Lemongrass', 1),
(449, 'Loomi', 1),
(450, 'Lovage', 1),
(451, 'Mace', 1),
(452, 'Mahlab', 1),
(453, 'Marjoram', 1),
(454, 'Mint', 1),
(455, 'Mojo Seasoning', 1),
(456, 'Mustard Powder', 1),
(457, 'Nutmeg', 1),
(458, 'Old Bay Seasoning', 1),
(459, 'Oregano', 1),
(460, 'Paprika', 1),
(461, 'Parsley', 1),
(462, 'Pickling Salt', 1),
(463, 'Pickling Spice', 1),
(464, 'Pumpkin Pie Spice', 1),
(465, 'Ras El Hanout', 1),
(466, 'Rosemary', 1),
(467, 'Safflower', 1),
(468, 'Saffron', 1),
(469, 'Sage', 1),
(470, 'Sea Salt', 1),
(471, 'Smoked Paprika', 1),
(472, 'Star Anise', 1),
(473, 'Sumac', 1),
(474, 'Summer Savory', 1),
(475, 'Tarragon', 1),
(476, 'Thai Basil', 1),
(477, 'Thyme', 1),
(478, 'Turmeric', 1),
(479, 'Water Hyssop', 1),
(480, 'Zaatar Seasoning blend', 1),
(481, 'Egg Yolks', 1),
(482, 'Pecorino Cheese', 1),
(483, 'Egg White', 1),
(484, 'Guanciale', 1),
(485, 'Wine White', 0),
(486, 'Wine Red', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `ingredients_ID` int(11) NOT NULL,
  `pID` varchar(30) NOT NULL,
  `ingredient` varchar(30) NOT NULL,
  `amount` decimal(6,2) DEFAULT NULL,
  `unit_ID` int(11) DEFAULT NULL,
  `state_ID` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`ingredients_ID`, `pID`, `ingredient`, `amount`, `unit_ID`, `state_ID`, `created`, `updated`) VALUES
(1, 'gguvjquhzxtqyelwd2zhaa', 'Garlic', 1.00, NULL, 6, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(2, 'gguvjquhzxtqyelwd2zhaa', 'Cabbage', 1.00, NULL, 1, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(4, 'gguvjquhzxtqyelwd2zhaa', 'Carrot', 1.00, NULL, 47, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(6, 'gguvjquhzxtqyelwd2zhaa', 'Chicken', 2.00, NULL, 21, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(7, 'gguvjquhzxtqyelwd2zhaa', 'Coriander ', 1.00, 5, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(8, 'gguvjquhzxtqyelwd2zhaa', 'Fish Sauce', 2.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(9, '83deedatskmrfyge97os5g', 'Black Pepper', 1.00, 1, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(12, '83deedatskmrfyge97os5g', 'Chicken', 4.00, NULL, 37, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(18, 'gguvjquhzxtqyelwd2zhaa', 'Onion Red', 1.00, NULL, 1, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(66, 'gguvjquhzxtqyelwd2zhaa', 'Kosher Salt', 0.50, 1, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(102, '83deedatskmrfyge97os5g', 'Thyme', 2.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(103, '83deedatskmrfyge97os5g', 'Rosemary', 2.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(104, '83deedatskmrfyge97os5g', 'Paprika', 1.00, 2, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(105, '83deedatskmrfyge97os5g', 'Oregano', 2.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(110, '83deedatskmrfyge97os5g', 'Olive Oil', 4.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(111, '83deedatskmrfyge97os5g', 'Lemon', 1.00, NULL, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(112, '83deedatskmrfyge97os5g', 'Kosher Salt', 1.00, 1, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(113, '83deedatskmrfyge97os5g', 'Garlic', 2.00, NULL, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(114, 'gguvjquhzxtqyelwd2zhaa', 'Brown sugar', 1.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(115, 'gguvjquhzxtqyelwd2zhaa', 'Rice Vinegar', 2.00, 3, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(116, 'gguvjquhzxtqyelwd2zhaa', 'Lime', 2.00, NULL, NULL, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(171, 'biqnqzaxreqil1thqvik8a', 'Lemon', 7.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(172, 'biqnqzaxreqil1thqvik8a', 'Lemon Basil', 3.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(173, 'biqnqzaxreqil1thqvik8a', 'Lemon Thyme', 2.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(174, 'biqnqzaxreqil1thqvik8a', 'Lemongrass', 4.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(175, 'joacqujgsfwlflnsjumucg', 'Lemon', 7.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(176, 'joacqujgsfwlflnsjumucg', 'Lemon Basil', 3.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(177, 'joacqujgsfwlflnsjumucg', 'Lemon Thyme', 2.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(178, 'joacqujgsfwlflnsjumucg', 'Lemongrass', 4.00, 4, 9, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(400, '_wpo6g9ore-g3izygjibzq', 'Abiu', 1.00, 0, 0, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(401, 'tq6lhfmerbw2_3-dzamrra', 'Abiu', 1.00, 0, 0, '2025-07-20 22:25:43', '2025-07-20 22:26:43'),
(402, 'zstxw2rysfc0cd7yom20xw', 'Onion Red', 1.00, 0, 0, '2025-07-21 19:12:20', '2025-07-21 19:12:20'),
(403, 'zstxw2rysfc0cd7yom20xw', 'Red Cabbage', 1.00, 0, 0, '2025-07-21 19:12:20', '2025-07-21 19:12:20');

-- --------------------------------------------------------

--
-- Table structure for table `origin`
--

CREATE TABLE `origin` (
  `origin_ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `origin`
--

INSERT INTO `origin` (`origin_ID`, `name`) VALUES
(1, 'Caribbean'),
(2, 'Central America'),
(3, 'America'),
(4, 'Mexico'),
(5, 'Africa'),
(6, 'India'),
(7, 'Persia'),
(8, 'Asia'),
(9, 'Mediterranean'),
(10, 'Guatemala'),
(11, 'Middle East'),
(12, 'South America'),
(13, 'Eastern Europe'),
(14, 'Egypt'),
(15, 'United States'),
(16, 'China'),
(17, 'Ceylon'),
(18, 'Madagascar'),
(19, 'Europe'),
(20, 'Iran'),
(21, 'Korea'),
(22, 'France'),
(23, 'Thailand'),
(24, 'Indonesia'),
(25, 'Canary Islands'),
(26, 'Morocco'),
(27, 'Spain'),
(28, 'Russia');

-- --------------------------------------------------------

--
-- Table structure for table `origins`
--

CREATE TABLE `origins` (
  `origins_ID` int(11) NOT NULL,
  `spice_ID` varchar(30) NOT NULL,
  `origin_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `origins`
--

INSERT INTO `origins` (`origins_ID`, `spice_ID`, `origin_ID`) VALUES
(14, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 8),
(15, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 11),
(22, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 16),
(24, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 9),
(39, 'mN1bV2cX3zA4sD5fG6hJ7kL', 9),
(41, 'oP5sD6fG7hJ8kL9mN0bV1cX', 9),
(45, 'rT6uV7wX8yZ9aS0dF1gH2jK', 16),
(46, 'rT6uV7wX8yZ9aS0dF1gH2jK', 6),
(49, 'uV7wX8yZ9aS0dF1gH2jK3mN', 22),
(50, 'vW4xY5zA6sD7fG8hJ9kL0mN', 6),
(63, 'yZ5aS3dF7gH8jK9mN0bV1cX', 24),
(81, 'fG5hJ6617mN8bV9cX0zA1sD', 9),
(87, 'fG5hJ6kL7mNggV9cX0zA1sD', 27),
(99, 'fG5hJ6kL7mN8b74cX0zA1sD', 6),
(102, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 10),
(103, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 6),
(104, 'Mn7BgV6cX5zAsDfG4hJk3L', 12),
(106, 'Qw5Er7Ty9Ui1Op2As3Df4G', 13),
(107, 'Hj6Kl8Zx0Cv1Bn2Mm3Qw4E', 2),
(108, 'Rt5Yy7Uu9Ii1Oo2Pp3Aa4S', 14),
(109, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 4),
(110, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 17),
(111, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 24),
(112, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 11),
(113, 'jK6mN7bV8cX9zA0sD1fG2hJ', 9),
(114, 'kL3mN4bV5cX6zA7sD8fG9hJ', 14),
(115, 'nM8xZ9aS0dF1gH2jK3mN4bV', 11),
(116, 'pQ2rS3tU4vW5xY6zA7sD8fG', 6),
(119, 'sD3fG4hJ5kL6mN7bV8cX9zA', 21),
(120, 'tU0vW1xY2zA3sD4fG5hJ6kL', 5),
(121, 'wX1yZ2aS3dF4gH5jK6mN7bV', 8),
(123, 'aS9dF0gH1jK2mN3bV4cX5zA', 9),
(128, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 15),
(135, 'fG5h73kL7mNpbV9cX0zA1sD', 8),
(136, 'fG5h73kL7mNpbV9cX0zA1sD', 11),
(139, 'hJ6kL8mN0bV1cX2zA3sD5f', 5),
(140, 'hJ6kL8mN0bV1cX2zA3sD5f', 8),
(141, 'hJ6kL8mN0bV1cX2zA3sD5f', 19),
(142, 'hJ6kL8mN0bV1cX2zA3sD5f', 18),
(143, 'G4hJ5kL6mN7bV8cX9zA0sD1', 20),
(144, 'G4hJ5kL6mN7bV8cX9zA0sD1', 9),
(153, 'aP4kL9mN2bV3cX1zA5sD7fG', 24),
(156, 'qR9sT8uV1wX2yZ3aS4dF5gH', 8),
(157, 'qR9sT8uV1wX2yZ3aS4dF5gH', 11),
(160, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 5),
(161, 'Zx8CvBnM6QwErTyUiOpLk9', 4),
(162, 'Qw2Er4Ty6Ui8Op0As9DfG5', 3),
(163, 'Qw2Er4Ty6Ui8Op0As9DfG5', 1),
(164, 'Qw2Er4Ty6Ui8Op0As9DfG5', 2),
(165, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 8),
(166, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 9),
(167, 'aB3dE5fG7hJ9kLmN1pQrS2', 2),
(169, 'fG2hJ3kL4mN5bV6cX7zA8sD', 6),
(172, 'fG5hJ6kL7mN8bV9cX0zA1sD', 15),
(173, 'dF1gH2jK3mN4bV5cX6zA7sD', 9),
(174, 'fG5h75kL7mN8bV9cX0zA1sD', 14),
(175, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 6),
(179, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 15),
(180, 'xY8zA9sD0fG1hJ2kL3mN4bV', 15),
(181, 'fG5hJ6kL76r8bV9cX0zA1sD', 9),
(182, 'yZ5aS6dF7gH8jK9mN0bV1cX', 6),
(183, 'yZ5aS6dF7gH8jK9mN0bV1cX', 9),
(187, 'yZ5aS6dF7gH8jK9mN0bV1cX', 9),
(188, 'zA2sD3fH4hJ5kL5mN7bV8cX', 6),
(189, 'zA2sD3fH4hJ5kL5mN7bV8cX', 23),
(190, 'yZ8aS6dF7gH8jK9mN0bV1cX', 11),
(192, 'zA2sD3fG4hN5kL6mN7bV8cX', 9),
(193, 'bV6cX7zA8sD9fG0hJ1kL2mN', 14),
(194, 'bV6cX7zA8sD9fG0hJ1kL2mN', 9),
(197, 'cX3zA4sD5fG6hJ7kL8mN9bV', 25),
(198, 'eG8hJ9kL0mN1bV2cX3zA4sD', 24),
(200, 'hJ9kL0mN1bV2cX3zA4sD5fG', 2),
(201, 'hJ9kL0mN1bV2cX3zA4sD5fG', 4),
(202, 'h56kL0mN1bV2cX3zA4sD5fG', 9),
(203, 'h57kL0mN1bV2cX3zA4sD5fG', 9),
(204, 'hJ9kL0mN1bV2cX3zf5sD5fG', 9),
(205, 'fG5hJ6kL7mN62V9cX0zA1sD', 8),
(206, 'fG5hJ6kL7mN62V9cX0zA1sD', 6),
(207, 'fG5hJ6kL7mN63V9cX0zA1sD', 9),
(208, 'fG5hJ6kL7mN8649cX0zA1sD', 9),
(209, 'fG5hJ67L7mN8bV9cX0zA1sD', 16),
(210, 'fG5hJ6kL7mN8bV68X0zA1sD', 9),
(211, 'fG5hJ98L7mN8bV6cX0zA1sD', 9),
(212, 'fG5hJ98L7mN8bV6cX0zA1sD', 11),
(213, 'fG5hJ6kL7mN8b70cX0zA1sD', 8),
(214, 'fG5hJ6kL7mN8b70cX0zA1sD', 28),
(215, 'fG5hJ6kL71N8bV9cX0zA1sD', 8),
(216, 'fG5hJ6kL71N8bV9cX0zA1sD', 6),
(217, 'fG5hJ6kL7m73bV9cX0nA1sD', 9),
(218, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 6),
(219, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 7),
(220, 'Mn7BgV6cX5zAsDfG4hJk3L', 9),
(221, 'fE9dC0bV1nM2xZ3aS4dF5gH', 6),
(222, 'gH2jK3mN4bV5cX6zA7sD8fG', 9),
(223, 'zC2sD3fG4hJ5kL6mN7bV8cX', 6),
(224, 'zC2sD3fG4hJ5kL6mN7bV8cX', 9),
(225, 'zB2sD3fG3hJ5kL7mN7bV8cX', 9),
(226, 'zB2sD3fG3hJ5kL7mN7bV8cX', 11),
(227, 'yZ5aS4dF7gH8jK8mN0bV1nX', 6),
(228, 'yZ5aS4dF7gH8jK8mN0bV1nX', 9),
(229, '83d6edaTsKmrfyge97os6g', 26);

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `section_ID` int(11) NOT NULL,
  `pID` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `heading` varchar(100) NOT NULL,
  `body` varchar(1000) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`section_ID`, `pID`, `category`, `heading`, `body`, `order`, `active`, `created`, `updated`) VALUES
(183, 'Qw2Er4Ty6Ui8Op0As9DfG5', 'spice', 'Allspice', 'Allspice is a spice made from dried berries of the Pimenta dioica plant. It has flavors reminiscent of cinnamon, cloves, and nutmeg.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(184, 'Zx8CvBnM6QwErTyUiOpLk9', 'spice', 'Ancho Powder', 'Ancho powder is made from dried poblano peppers. It has a mild, slightly sweet flavor with hints of smokiness.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(185, 'aB3dE5fG7hJ9kLmN1pQrS2', 'spice', 'Annatto Seed', 'Annatto seeds come from the achiote tree and are used as a natural food coloring. They have a mild, earthy flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(186, 'Gh7Jk9LzXc3Vb2Nm1QwEr4', 'spice', 'Baharat', 'Baharat is a Middle Eastern spice blend that typically includes cinnamon, cloves, cumin, coriander, and cardamom. It adds warmth and depth to dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(187, 'Ty5Ui7Op9As1Df3Gh6Jk8L', 'spice', 'Basil', 'Basil is an aromatic herb commonly used in Mediterranean and Italian cuisine. It has a sweet, slightly peppery flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(188, 'Zx2Cv4Bn6Mq8Ws1Ed3Rf5T', 'spice', 'Bay Leave', 'Bay leaves are dried leaves from the bay laurel tree. They add a subtle, earthy flavor to soups, stews, and sauces.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(189, 'Yh7Jk9Lm1Nx2Cv3Bn4Zx5A', 'spice', 'Black Pepper', 'Black pepper comes from the dried berries of the Piper nigrum plant. It has a pungent, spicy flavor and is commonly used as a seasoning.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(190, 'Sd6Fg8Hj0Kl2Qw3Er4Ty5U', 'spice', 'Cardamom', 'Cardamom is a fragrant spice with a sweet, citrusy flavor. It is commonly used in both sweet and savory dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(191, 'Io7Pp9As1Df2Gh3Jk4Lm5N', 'spice', 'Carom Seed', 'Carom seeds, also known as ajwain, have a strong, pungent flavor with hints of thyme and oregano. They are often used in Indian and Middle Eastern cuisine.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(192, 'Vb6Nm8Cx0Zz1Xx2Cv3Bb4V', 'spice', 'Cayenne Pepper', 'Cayenne pepper is a fiery spice made from dried red chili peppers. It adds heat and depth to dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(193, 'Mn7BgV6cX5zAsDfG4hJk3L', 'spice', 'Celery Seed', 'Celery seeds have a strong celery flavor and are commonly used as a seasoning in pickles, coleslaw, and other dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(194, 'Qw5Er7Ty9Ui1Op2As3Df4G', 'spice', 'Chervil', 'Chervil is a delicate herb with a mild anise-like flavor. It is often used in French cuisine.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(195, 'Hj6Kl8Zx0Cv1Bn2Mm3Qw4E', 'spice', 'Chia Seeds', 'Chia seeds are tiny seeds that swell when soaked in liquid. They have a neutral flavor and are often used in smoothies, puddings, and baked goods.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(196, 'Rt5Yy7Uu9Ii1Oo2Pp3Aa4S', 'spice', 'Chicory', 'Chicory is a bitter leafy green often used in salads or roasted as a coffee substitute. It has a distinct, earthy flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(197, 'Dd6Ff8Gg0Hh1Jj2Kk3Ll4Z', 'spice', 'Chili Powder', 'Chili powder is a blend of ground dried chili peppers and other spices. It adds heat and flavor to dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(198, 'Xx5Cc7Vv9Bb1Nn2Mm3Qq4W', 'spice', 'Chinese five-spice', 'Chinese five-spice powder is a blend of star anise, cloves, cinnamon, Sichuan peppercorns, and fennel seeds. It is commonly used in Chinese cuisine.ription.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(199, 'Ee6Rr8Tt0Yy1Uu2Ii3Oo4P', 'spice', 'Chipotle', 'Chipotle powder is made from smoked and dried jalapeño peppers. It has a smoky, spicy flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(200, 'Aa5Ss7Dd9Ff1Gg2Hh3Jj4K', 'spice', 'Chives', 'Chives are slender green herbs with a mild onion flavor. They are often used as a garnish or in salads.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(201, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 'spice', 'Cilantro', 'Cilantro, also known as coriander leaves, has a fresh, citrusy flavor. It is commonly used in Mexican, Indian, and Thai cuisines.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(202, 'Qq5Ww7Ee9Rr1Tt2Yy3Uu4I', 'spice', 'Cinnamon', 'Cinnamon comes from the bark of the Cinnamomum tree. It has a warm, sweet flavor and is used in both sweet and savory dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(203, 'aP4kL9mN2bV3cX1zA5sD7fG', 'spice', 'Cloves', 'Cloves are dried flower buds with a strong, spicy flavor. They are often used in baking and savory dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(204, 'Ll6Zz8Xx0Cc1Vv2Bb3Nn4M', 'spice', 'Coriander', 'Coriander, also known as ground coriander, has a citrusy, slightly nutty flavor. It is commonly used in Indian, Middle Eastern, and Mediterranean cuisines.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(205, 'G4hJ5kL6mN7bV8cX9zA0sD1', 'spice', 'Cumin', 'Cumin, also known as ground cumin, has a warm, earthy flavor with hints of citrus. It is commonly used in Indian, Mexican, and Middle Eastern cuisines.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(206, 'fG2hJ3kL4mN5bV6cX7zA8sD', 'spice', 'Curry leaves', 'Curry leaves come from the curry tree and are used in Indian and Sri Lankan cooking. They have a distinct, aromatic flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(207, 'fE9dC0bV1nM2xZ3aS4dF5gH', 'spice', 'Curry powder ', 'Curry powder is a blend of various spices, including turmeric, coriander, cumin, and fenugreek. It adds a warm, savory flavor to dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(208, 'jK6mN7bV8cX9zA0sD1fG2hJ', 'spice', 'Dill', 'Dill is an aromatic herb with feathery green leaves and a distinct flavor. It has a fresh, slightly tangy taste with hints of anise and celery. Commonly used in pickling, salads, and as a garnish for fish and seafood dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(209, 'kL3mN4bV5cX6zA7sD8fG9hJ', 'spice', 'Dukkah', 'Dukkah is an Egyptian spice blend made from toasted nuts (usually hazelnuts or almonds), seeds (such as sesame and coriander), and spices (like cumin and black pepper). It adds a rich, nutty flavor and a crunchy texture to dishes. Often served with bread and olive oil for dipping.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(210, 'mN1bV2cX3zA4sD5fG6hJ7kL', 'spice', 'Elderflower', 'Elderflower comes from the blossoms of the elderberry plant. It has a delicate floral aroma and a sweet, slightly fruity taste. Used to make elderflower syrup, liqueurs, and desserts.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(211, 'nM8xZ9aS0dF1gH2jK3mN4bV', 'spice', 'Fenugreek', 'Fenugreek seeds have a slightly bitter taste with a hint of maple. Commonly used in Indian and Middle Eastern cuisines. Adds depth to curries, stews, and spice blends.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(212, 'oP5sD6fG7hJ8kL9mN0bV1cX', 'spice', 'Flax Seeds', 'Flax seeds are tiny, nutty seeds rich in omega-3 fatty acids and fiber. Often used in baking (as an egg substitute), smoothies, and oatmeal. They have a subtle flavor and add a pleasant crunch.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(213, 'pQ2rS3tU4vW5xY6zA7sD8fG', 'spice', 'Garam Masala', 'Garam masala is a warm spice blend commonly used in Indian cooking. t includes spices like cinnamon, cardamom, cloves, and cumin. Adds depth and complexity to curries, rice dishes, and roasted vegetables.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(214, 'qR9sT8uV1wX2yZ3aS4dF5gH', 'spice', 'Garlic powder', 'Garlic powder is made from dried, ground garlic cloves. It has a concentrated garlic flavor and is convenient for seasoning dishes. Used in marinades, sauces, and spice rubs.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(215, 'rT6uV7wX8yZ9aS0dF1gH2jK', 'spice', 'Ginger', 'Ginger has a spicy, slightly sweet flavor with citrus undertones. Used in both savory and sweet dishes. Commonly found in Asian cuisine, teas, and desserts.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(216, 'sD3fG4hJ5kL6mN7bV8cX9zA', 'spice', 'Gochugaru', 'Gochugaru is Korean red chili pepper flakes. It has a moderate heat level and a smoky, fruity flavor. Essential for making kimchi and other Korean dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(217, 'tU0vW1xY2zA3sD4fG5hJ6kL', 'spice', 'Grains of Paradise', 'Grains of Paradise are small seeds with a peppery, citrusy flavor. Used as a spice in West African and North African cuisines. Similar to black pepper but with more complexity.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(218, 'uV7wX8yZ9aS0dF1gH2jK3mN', 'spice', 'Herbes de Provence ', 'Herbes de Provence is a French herb blend that typically includes thyme, rosemary, oregano, marjoram, and lavender. Used in Mediterranean dishes, roasted meats, and vegetable dishes. Adds a fragrant and earthy flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(219, 'vW4xY5zA6sD7fG8hJ9kL0mN', 'spice', 'Holy basil', 'Holy basil, also known as tulsi, is a sacred herb in Indian culture. It has a peppery, clove-like flavor and is used in teas, curries, and herbal remedies. Believed to have medicinal properties.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(220, 'wX1yZ2aS3dF4gH5jK6mN7bV', 'spice', 'Kaffir lime leaves', 'Kaffir lime leaves come from the kaffir lime tree. They have a strong citrus aroma and flavor. Commonly used in Thai and Southeast Asian cuisine. Enhances curries, soups, and stir-fries.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(221, 'xY8zA9sD0fG1hJ2kL3mN4bV', 'spice', 'Kosher salt', 'Kosher salt is a coarse edible salt, usually without common additives such as iodine. It&#39;s commonly used in cooking and not typically found on the dining table. Kosher salt has larger, light flakes that don&#39;t dissolve immediately, making it easy to measure and distribute.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(222, 'yZ5aS4dF7gH8jK8mN0bV1nX', 'spice', 'Lavender', 'Lavender is a fragrant herb with gray-green, hoary linear leaves. The purple flowers are sparsely arranged on spikes at the tips of long bare stalks. It has a wonderful lemon scent and is used in cooking, baking, and herbal medicine.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(223, 'zC2sD3fG4hJ5kL6mN7bV8cX', 'spice', 'Lemon Basil', 'Lemon basil (Ocimum citriodorum) is an upright, bushy annual herb. It has intensely citrus-scented, bright green leaves. Used in various cuisines for its sweet anise flavor with a subtle essence of lemon.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(224, 'yZ5aS6dF7gH8jK9mN0bV1cX', 'spice', 'Lemon Thyme', 'Lemon thyme (Thymus citriodorus) is a lemon-scented evergreen mat-forming perennial plant. It has aromatic, edible, lance-diamond-shaped, mid-green leaves. Used in cooking for its fresh lemony flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(225, 'zA2sD3fH4hJ5kL5mN7bV8cX', 'spice', 'Lemongrass', 'Lemongrass (Cymbopogon citratus) is a tall, grassy herb with a lemony fragrance. Commonly used in Asian cuisine, especially Thai dishes. Adds a citrusy, herbal flavor to soups, curries, and teas.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(226, 'yZ8aS6dF7gH8jK9mN0bV1cX', 'spice', 'Loomi', 'Loomi, also known as dried black lime, is a Middle Eastern spice. It&#39;s made by drying whole limes until they turn black and hard. Used in savoury dishes, stews, and rice for its tangy, earthy flavour.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(227, 'zA2sD3fG4hN5kL6mN7bV8cX', 'spice', 'Lovage', 'Lovage (Levisticum officinale) is a perennial herb with dark green, celery-like leaves. It has a strong, savory flavor reminiscent of celery and parsley. Used in soups, stews, and as a seasoning.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(228, 'yZ5aS3dF7gH8jK9mN0bV1cX', 'spice', 'Mace', 'Mace is a spice derived from the outer covering of the nutmeg seed. It has a warm, aromatic flavor with hints of cinnamon and pepper. Used in both sweet and savoury dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(229, 'zB2sD3fG3hJ5kL7mN7bV8cX', 'spice', 'Mahlab', 'Mahlab is made from ground cherry pits (Prunus Mahlab). It has a unique, slightly bitter almond flavor. Commonly used in Middle Eastern and Mediterranean baked goods.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(230, 'aS9dF0gH1jK2mN3bV4cX5zA', 'spice', 'Marjoram', 'Marjoram (Origanum Majorana) is a fragrant herb with small, oval leaves. It has a mild, sweet flavor similar to oregano. Used in Mediterranean and European cuisines, especially in tomato-based dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(231, 'bV6cX7zA8sD9fG0hJ1kL2mN', 'spice', 'Mint', 'Mint is a fragrant herb with bright green leaves. It has a refreshing, cool flavor with hints of sweetness. Used in both savoury and sweet dishes, such as salads, teas, and desserts.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(232, 'cX3zA4sD5fG6hJ7kL8mN9bV', 'spice', 'Mojo Seasoning', 'Mojo seasoning is a vibrant blend of citrus, garlic, and herbs. Commonly used in Cuban and Caribbean cuisines. Adds zesty, garlicky flavour to marinades and roasted meats.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(233, 'dF1gH2jK3mN4bV5cX6zA7sD', 'spice', 'Mustard Powder', 'Mustard powder is made from ground mustard seeds. It has a sharp, tangy flavor and is commonly used in dressings, sauces, and spice rubs. Adds depth to dishes without the liquid consistency of prepared mustard.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(234, 'eG8hJ9kL0mN1bV2cX3zA4sD', 'spice', 'Nutmeg', 'Nutmeg is a warm, aromatic spice derived from the seed of the nutmeg tree. It has a sweet, slightly nutty flavor. Used in both sweet and savory dishes, including baked goods and creamy sauces.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(235, 'fG5hJ6kL7mN8bV9cX0zA1sD', 'spice', 'Old Bay', 'Old Bay seasoning is a classic blend of spices, including celery salt, paprika, and black pepper. Iconic in Maryland cuisine, especially for seasoning seafood (like crabs and shrimp). Has a savory, slightly spicy flavor.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(236, 'gH2jK3mN4bV5cX6zA7sD8fG', 'spice', 'Oregano', 'Oregano is a pungent herb with small, oval leaves. Commonly used in Italian and Mediterranean cooking. Adds a robust, earthy flavor to pasta sauces, pizzas, and grilled meats.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(237, 'hJ9kL0mN1bV2cX3zA4sD5fG', 'spice', 'Paprika', 'Paprika is a ground spice made from dried red peppers. It comes in various types (sweet, smoked, hot) with different flavor profiles. Used for color and flavor in dishes like stews, rice, and roasted vegetables.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(238, 'h56kL0mN1bV2cX3zA4sD5fG', 'spice', 'Parsley', 'Parsley is a versatile herb with flat or curly leaves. It has a mild, fresh flavor and is often used as a garnish. Adds brightness to salads, soups, and sauces.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(239, 'h57kL0mN1bV2cX3zA4sD5fG', 'spice', 'Pickling Salt', 'Pickling salt is a fine-grained salt used specifically for pickling and preserving. It dissolves easily and doesn&#39;t contain additives like iodine. Essential for brining vegetables and making pickles.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(240, 'hJ9kL0mN1bV2cX3zf5sD5fG', 'spice', 'Pickling Spice', 'Pickling spice is a blend of whole spices used for pickling and flavoring. Ingredients typically include mustard seeds, coriander, cloves, and bay leaves. Enhances the flavor of pickles, sauerkraut, and other preserved foods.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(241, 'hJ5HJ0mN1bV2cX3zA8sD5fG', 'spice', 'Pumpkin Pie Spice', 'Pumpkin pie spice is a warm blend of cinnamon, nutmeg, ginger, and cloves. Often used in fall and holiday baking, especially for pumpkin pies and desserts. Adds cozy, aromatic flavors.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(242, '83d6edaTsKmrfyge97os6g', 'spice', 'Ras El Hanout', 'Ras El Hanout is a North African spice blend. It typically includes a mix of warm spices like cinnamon, cumin, coriander, and cloves. Used in Moroccan and Tunisian cuisine for flavoring tagines, couscous, and grilled meats.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(243, 'fG5hJ6617mN8bV9cX0zA1sD', 'spice', 'Rosemary', 'Rosemary is an aromatic herb with needle-like leaves. It has a strong, pine-like flavor and pairs well with roasted meats, potatoes, and bread. Often used in Mediterranean and Italian cooking.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(244, 'fG5hJ6kL7mN62V9cX0zA1sD', 'spice', 'Safflower', 'Safflower is a plant with bright orange or yellow flowers. The dried petals are used to make safflower tea. It has a mild, earthy flavor and is sometimes used as a saffron substitute.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(245, 'fG5hJ6kL7mN63V9cX0zA1sD', 'spice', 'Saffron', 'Saffron is a prized spice derived from the stigma of the crocus flower. It has a rich, floral flavor and imparts a golden color to dishes. Used in paella, risotto, and desserts.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(246, 'fG5hJ6kL7mN8649cX0zA1sD', 'spice', 'Sage', 'Sage is a perennial herb with gray-green leaves. It has a savory, slightly peppery flavor. Used in stuffing, sauces, and as a seasoning for poultry.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(247, 'fG5hJ6kL76r8bV9cX0zA1sD', 'spice', 'Sea salt', 'Sea salt is harvested from seawater. It has larger crystals and a more complex flavor compared to table salt. Used for seasoning and finishing dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(248, 'fG5hJ6kL7mNggV9cX0zA1sD', 'spice', 'Smoked Paprika', 'Smoked paprika is made from dried and smoked red peppers. It has a smoky, sweet flavor and adds depth to dishes. Commonly used in Spanish and Hungarian cuisines.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(249, 'fG5hJ67L7mN8bV9cX0zA1sD', 'spice', 'Star Anise', 'Star anise is a star-shaped spice with a licorice-like flavor. Used in Chinese and Vietnamese cooking, especially in soups and braised dishes.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(250, 'fG5hJ6kL7mN8bV68X0zA1sD', 'spice', 'Sumac', 'Sumac is a tangy spice made from ground sumac berries. It has a lemony flavor and is used in Middle Eastern and Mediterranean dishes. Sprinkled on salads, kebabs, and rice.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(251, 'fG5hJ98L7mN8bV6cX0zA1sD', 'spice', 'Summer Savory', 'Summer savory is an herb with a peppery, thyme-like flavor. Used in European and Mediterranean cuisines. Enhances bean dishes, stews, and sausages.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(252, 'fG5hJ6kL7mN8b70cX0zA1sD', 'spice', 'Tarragon', 'Tarragon is a fragrant herb with narrow, pointed leaves. It has a distinct anise-like flavor. Commonly used in French cuisine, especially in sauces like béarnaise.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(253, 'fG5hJ6kL71N8bV9cX0zA1sD', 'spice', 'Thai Basil ', 'Thai basil has purple stems and green leaves with a licorice-like flavor. Used in Thai and Southeast Asian cooking. Pairs well with spicy dishes and curries.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(254, 'fG5hJ6kL7m73bV9cX0nA1sD', 'spice', 'Thyme', 'Thyme is a versatile herb with small, aromatic leaves. It has a savory, earthy flavor and complements roasted meats, vegetables, and sauces.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(255, 'fG5h73kL7mNpbV9cX0zA1sD', 'spice', 'Turmeric', 'Turmeric is a bright yellow spice with a warm, slightly bitter taste. Used in Indian and Southeast Asian cuisines. Known for its health benefits and vibrant color.', NULL, 0, '2024-07-22 01:15:13', '2024-07-22 01:15:13'),
(352, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 1', 'Place 1 pound boneless, skinless chicken breasts in a single layer in a medium saucepan. Add enough water to barely cover the chicken and 1 teaspoon kosher salt. Bring to a boil over medium-high heat. Reduce the heat to maintain a simmer, cover, and cook until just cooked through, about 15 minutes. Meanwhile, pickle the red onion and prepare the remaining ingredients.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(353, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 2', 'Thinly slice 1/2 medium red onion and place in a small bowl. Add 2 tablespoons rice vinegar and toss to combine. Let sit for 15 minutes.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(354, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 3', 'Prepare the following, adding each to the same large bowl (use the biggest one you have!) as you complete it: Remove the outer leaves from 1/2 medium green cabbage. Trim the core, then thinly slice the cabbage about the same width as the onion (about 8 cups). Peel 1 large carrot, then cut crosswise into 2-inch pieces. Cut the pieces lengthwise into 1/8-inch thick planks. Stacking a few planks at a time, very thinly slice lengthwise into matchsticks. (If using pre-shredded carrots, add 1 1/2 cups directly to the bowl.) Coarsely chop the leaves and tender stems from 1/2 bunch fresh cilantro sprigs until you have 1/4 cup.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(355, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 4', 'When the chicken is ready, transfer to a clean cutting board and let cool. When the onions are ready, drain off the vinegar. Meanwhile, make the dressing.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(356, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 5', 'Mince 1 garlic clove and place in a small bowl. Juice 1 to 2 medium limes into the bowl until you have about 2 1/2 tablespoons. Add 1/3 cup rice vinegar, 2 tablespoons fish sauce, and 2 tablespoons granulated sugar, and whisk to combine.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(357, 'gguvjquhzxtqyelwd2zhaa', 'dish', 'Step 6 ', 'Shred the chicken into bite-sized pieces. Add the chicken and onions to the vegetables and toss with your hands to combine. Drizzle with the dressing and toss to combine. Let sit for 5 to 10 minutes for the flavors to meld. Taste and season with more lime juice as needed. Sprinkle each serving with 1 to 2 tablespoons fried shallots and serve with prawn chips if desired.', NULL, 0, '2024-11-24 04:53:20', '2024-11-24 04:53:20'),
(360, '83deedatskmrfyge97os5g', 'dish', 'Step 1: Herb Sauce', '1 cup fresh herbs, 2 green onions, 2 garlic cloves (2 tsp), grated or minced (or 2 frozen cubes), lemon zest from 1 lemon (plus optional 1-2 tablespoon lemon juice), 6 tablespoon olive oil you can use extra-virgin olive oil if you prefer (it has a stronger taste), 1/2 teaspoon kosher salt, 1/4 teaspoon black pepper, 1/2 teaspoon red pepper flakes or less (optional) *US Measures – Metric Instructions.', NULL, 0, '2024-11-24 06:13:12', '2024-11-24 06:13:12'),
(361, '83deedatskmrfyge97os5g', 'dish', 'Method', 'You can grill or roast the chicken. °To grill: Clean and oil grill with cooking spray. Heat gas grill to medium high 375-425F(190-218C). °To roast: Heat oven to 400.', NULL, 0, '2024-11-24 06:13:12', '2024-11-24 06:13:12');
-- --------------------------------------------------------

--
-- Table structure for table `spices`
--

CREATE TABLE `spices` (
  `spices_ID` int(11) NOT NULL,
  `dish_ID` varchar(30) NOT NULL,
  `spice_ID` int(11) NOT NULL,
  `amount` decimal(6,2) DEFAULT NULL,
  `unit_ID` int(11) DEFAULT NULL,
  `state_ID` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `spices`
--

INSERT INTO `spices` (`spices_ID`, `dish_ID`, `spice_ID`, `amount`, `unit_ID`, `state_ID`, `created`) VALUES
(1, '1', 7, 0.25, 2, NULL, '2024-07-29 23:43:10'),
(3, '1', 39, 0.50, 2, NULL, '2024-07-29 23:43:10'),
(4, '1', 54, 2.00, 2, NULL, '2024-07-29 23:43:10'),
(5, '1', 55, 0.50, 2, NULL, '2024-07-29 23:43:10'),
(6, '1', 61, 2.00, 2, NULL, '2024-07-29 23:43:10'),
(7, '1', 72, 2.00, 2, NULL, '2024-07-29 23:43:10'),
(8, '3', 19, 0.50, 5, 1, '2024-07-22 04:27:35'),
(9, '3', 39, 1.00, 2, NULL, '2024-07-22 04:27:35'),
(10, '2', 6, 3.00, NULL, 15, '2024-07-22 02:01:25'),
(11, '2', 7, 1.00, 2, NULL, '2024-07-22 02:01:25'),
(12, '2', 8, 5.00, NULL, 15, '2024-07-22 02:01:25'),
(14, '2', 20, 1.00, NULL, 42, '2024-07-22 02:01:25'),
(15, '2', 21, 4.00, NULL, 15, '2024-07-22 02:01:25'),
(16, '2', 22, 1.00, 5, NULL, '2024-07-22 02:01:25'),
(17, '2', 23, 2.00, 2, NULL, '2024-07-22 02:01:25'),
(18, '2', 31, 2.00, 2, NULL, '2024-07-22 02:01:25'),
(21, '2', 39, 1.00, 2, NULL, '2024-07-22 02:01:25'),
(22, '2', 55, 2.00, 2, NULL, '2024-07-22 02:01:25'),
(23, '2', 73, 1.00, 2, NULL, '2024-07-22 02:01:25'),
(32, '393', 1, 1.00, NULL, NULL, '2024-08-23 20:25:55'),
(33, '393', 1, 0.25, 5, 21, '2024-08-29 23:17:56'),
(34, '393', 1, 1.00, NULL, NULL, '2024-08-30 01:39:53'),
(35, '394', 8, 1.00, NULL, NULL, '2024-08-30 02:39:40'),
(36, '394', 3, 1.00, NULL, NULL, '2024-08-30 02:39:40'),
(37, '393', 75, 0.25, 4, 21, '2024-08-30 20:05:01'),
(38, '393', 16, 1.00, NULL, NULL, '2024-08-30 20:05:01'),
(41, '397', 1, 1.00, NULL, NULL, '2024-09-02 14:31:13'),
(42, '397', 5, 1.00, NULL, NULL, '2024-09-02 14:52:19'),
(43, '397', 3, 1.00, NULL, NULL, '2024-09-02 14:55:26'),
(44, '395', 16, 1.00, 2, NULL, '2024-09-02 17:01:56'),
(45, '395', 39, 2.00, 2, NULL, '2024-09-02 17:04:48'),
(46, '395', 7, 0.50, 2, NULL, '2024-09-02 17:05:37'),
(48, '398', 49, 1.00, NULL, 49, '2024-09-03 02:14:13'),
(49, '398', 19, 1.00, NULL, 49, '2024-09-03 02:24:44'),
(57, '400', 2, 1.00, NULL, NULL, '2024-09-06 18:40:29'),
(58, '400', 1, 1.00, NULL, NULL, '2024-09-08 06:55:45');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_ID`, `name`) VALUES
(1, 'Chopped'),
(2, 'Slice'),
(3, 'Mashed'),
(4, 'Sun Dried'),
(5, 'Crushed'),
(6, 'Grated'),
(7, 'Diced'),
(8, 'Julienne'),
(9, 'Batonnet'),
(10, 'Brunoise'),
(11, 'Minced'),
(12, 'Chiffonade'),
(13, 'Rolled'),
(14, 'Grounded'),
(15, 'Whole'),
(16, 'Bunch'),
(17, 'Chunked'),
(18, 'Leg'),
(21, 'Breast'),
(22, 'Rib'),
(25, 'Shoulder'),
(26, 'Tenderloin'),
(28, 'Sirloin'),
(29, 'Steak'),
(32, 'Prime Rib'),
(36, 'Wing'),
(37, 'Thigh'),
(38, 'Brined'),
(40, 'Purée'),
(42, 'Stick'),
(46, 'Juiced'),
(47, 'Match Sticks'),
(49, 'Handful'),
(50, 'Cooked'),
(51, 'Tinned');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`type_ID`, `name`, `color`) VALUES
(1, 'Spice', 'red'),
(2, 'Herb', 'green'),
(3, 'Seasoning', 'blue');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `unit_ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`unit_ID`, `name`, `code`) VALUES
(1, 'Pinch', 'pch'),
(2, 'Teaspoon', 'tsp'),
(3, 'Tablespoon', 'tbs'),
(4, 'Fluid Ounce', 'fl oz'),
(5, 'Cup', 'c'),
(6, 'Pint', 'pt'),
(7, 'Quart', 'qt'),
(8, 'Gallon', 'gl'),
(9, 'Milliliter', 'ml'),
(11, 'Ounce', 'oz'),
(12, 'Gram', 'g'),
(13, 'Millgram', 'mg'),
(14, 'Kilogram', 'kg'),
(15, 'Pound', 'lb'),
(16, 'Thumb', 'tmb'),
(18, 'Litre', 'l');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_ID` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(16) NOT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `qm_activate` tinyint(1) NOT NULL DEFAULT '0',
  `qm_recover` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_ID`, `username`, `password`, `email`, `name`, `phone`, `address`, `active`, `qm_activate`, `qm_recover`, `created`, `updated`) VALUES
(1, 'e9fe37b9-7cba-4767-afab-6a495b12d09a', 'pA55wORD$', 'demo@pestlehub.com', 'ted', NULL, NULL, 1, 0, 0, '2025-07-10 18:10:42', '2025-07-10 18:10:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`bookmarks_ID`) USING BTREE;

--
-- Indexes for table `dish`
--
ALTER TABLE `dish`
  ADD PRIMARY KEY (`dish_ID`),
  ADD UNIQUE KEY `dish_ID` (`dish_ID`);

--
-- Indexes for table `email_log`
--
ALTER TABLE `email_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_queue`
--
ALTER TABLE `email_queue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flavour`
--
ALTER TABLE `flavour`
  ADD PRIMARY KEY (`flavour_ID`);

--
-- Indexes for table `flavours`
--
ALTER TABLE `flavours`
  ADD PRIMARY KEY (`flavours_ID`);

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`ingredient_ID`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`ingredients_ID`);

--
-- Indexes for table `origin`
--
ALTER TABLE `origin`
  ADD PRIMARY KEY (`origin_ID`);

--
-- Indexes for table `origins`
--
ALTER TABLE `origins`
  ADD PRIMARY KEY (`origins_ID`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`section_ID`);

--
-- Indexes for table `spices`
--
ALTER TABLE `spices`
  ADD PRIMARY KEY (`spices_ID`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_ID`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`type_ID`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`unit_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_ID`),
  ADD UNIQUE KEY `user_ID` (`user_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `bookmarks_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `dish`
--
ALTER TABLE `dish`
  MODIFY `dish_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=741;

--
-- AUTO_INCREMENT for table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `ingredient_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=487;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `ingredients_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=404;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `section_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=544;

--
-- AUTO_INCREMENT for table `spices`
--
ALTER TABLE `spices`
  MODIFY `spices_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `unit_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
