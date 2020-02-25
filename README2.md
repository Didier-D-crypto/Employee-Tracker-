Different solution: 
 Incorporating insert into to have more properties:
  USE EmployeeTracker_db;
INSERT into employee (first_name, last_name, role_id, manager_id, salary, department_id, department_name, role_title) VALUES ("Beatrice", "Pilgrim", 1, null, 50000.01, 1, "Sales", "Sales Person");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Unic", "Shante", 2, 1, 3000.09, 3, 4, "Financial Advisor"), ;
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Opal", "Violet", 2, 1, 9000.45, 2, 4, "Engineering");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Iowa", "Potato", 3, 3, null, 10000.01, 1, 2, "Engineering");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Merchandise", "Nice", 4, 4, 10000.01, 1, 2, "Sales Person");
INSERT into employee (first_name, last_name, role_id, manager_id, |salary, department_id, department_name, role_title) VALUES ("Open", "Door", 5, 7, 10000.01, 1, 2, "Sales Marketing");
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Su", "Cereal", 5, null, 5,7, 10000.01, 1, 2, "Marketing");