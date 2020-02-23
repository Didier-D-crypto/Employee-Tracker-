
DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE database EmployeeTracker_db;
USE EmployeeTracker_db;
CREATE TABLE department (
  id INTEGER NOT NULL  PRIMARY KEY,
  name VARCHAR(40)
);
CREATE TABLE role (
  id INTEGER NOT NULL PRIMARY KEY,
  title VARCHAR(50),
  salary DECIMAL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
  id INTEGER NOT NULL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(40),
  role_id INTEGER,
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES role(id)
);
USE EmployeeTracker_db;
INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("Legal");
INSERT into department (name) VALUES ("Finance");
INSERT into department (name) VALUES ("Engineering");
INSERT into role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales Person", 50000, 1);
INSERT into role (title, salary, department_id) VALUES ("Lawyer", 100000, 2);
INSERT into role (title, salary, department_id) VALUES ("Legal Team Lead", 900000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Financial Advisor", 30000, 3);
INSERT into role (title, salary, department_id) VALUES ("Dev Ops", 80000, 4);
INSERT into role (title, salary, department_id) VALUES ("Programmer", 80000, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Beatrice", "Pilgrim", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Unic", "Shante", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Opal", "Violet", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Iowa", "Potato", 3, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Merchandise", "Nice", 4, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Open", "Door", 5, 7);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Su", "Cereal", 5, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Xavier", "Brown", 5, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Porter", "Vitrium",9, 7);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Roman", "Kilack", 7, 4);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Aria", "Dynasis", 5, 7);


