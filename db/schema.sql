
DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE database EmployeeTracker_db;
USE EmployeeTracker_db;

CREATE TABLE employee (
   id INTEGER NOT NULL auto_increment PRIMARY KEY,
   first_name VARCHAR(30),
   last_name VARCHAR(40),
   role_id INTEGER,
   manager_id INTEGER,
   salary DECIMAL,
   department_id INTEGER,
   department_name INTEGER, 
   role_title VARCHAR(55),
   
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES role(id)
);
USE EmployeeTracker_db;
INSERT into employee (first_name, last_name, role_id, manager_id, salary, department_id, department_name, role_title) VALUES ("Beatrice", "Pilgrim", 1, null, 50000.01, 1, "Sales", "Sales Person");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Unic", "Shante", 2, 1, 3000.09, 3, 4, "Financial Advisor"), ;
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Opal", "Violet", 2, 1, 9000.45, 2, 4, "Engineering");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Iowa", "Potato", 3, 3, null, 10000.01, 1, 2, "Engineering");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Merchandise", "Nice", 4, 4, 10000.01, 1, 2, "Sales Person");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Open", "Door", 5, 7, 10000.01, 1, 2, "Sales Marketing");
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Su", "Cereal", 5, null, 5,7, 10000.01, 1, 2, "Marketing");
 INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Porter", "Vitrium",9, 7, 45000.12, 2 ,3, "System IT");
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Roman", "Kilack", 7, 4, 30000.50, 2, 1, "Data Analytics");
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Aria", "Dynasis", 5, 7, 90000.09, 1, 2, "Lead Engineer");


