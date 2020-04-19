DROP DATABASE if exists chirpy;

CREATE DATABASE chirpy;

USE chirpy; 

CREATE TABLE `chirps` (
 id INT NOT NULL, 
 author VARCHAR (45),
 chirp  VARCHAR (45),
 created  DECIMAL (13, 0),
 PRIMARY KEY (id) 
 );
 
 
