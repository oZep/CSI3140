-- This code is from the textbook.

DROP DATABASE IF EXISTS URLs;

CREATE DATABASE URLs;

USE URLs;

CREATE TABLE urltable
(
   ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   URL varchar(128),
   description varchar(255)
);

