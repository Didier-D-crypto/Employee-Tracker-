
DROP DATABASE IF EXISTS  Employee;
CREATE DATABASE Employee;

USE Employee;

CREATE TABLE characters(
  id INT NOT NULL ,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR (30)NULL,
  title VARCHAR (30) NULL,
  department VARCHAR (30)NULL,
  Salary DECIMAL (10,4),
  Manager VARCHAR (30) NULL, 
 
);



