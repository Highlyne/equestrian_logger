-- Create the database burgers_db
CREATE DATABASE pony_db;
USE `pony_db`;

-- Create the table burgers
CREATE TABLE `ponies`
(
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`pony_name` VARCHAR(255) NOT NULL,
	`ride` BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);