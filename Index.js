//INQUIRER IMPLEMENTATION WITH CALLING DIFFERENT FUNCTIONS 

var inquirer = require("inquirer");
start()
function start(){

inquirer.
prompt(
  {
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Find Department",
      "Find Employee by Department",
      "Search for specific Employee",
      "Find Employee Role",
      "Exit",
    ]
  })
   .then(function (answer) {
      switch (answer.choices) {
        case "Find Department":
          departmentSearch();
          break;

        case "Find Employee by Department":
          employeeDepSearch();
          break;

        case "Search for specific Employee":
          EmpSpecSearch();
          break;

        case "Find Employee Role":
          RoleSearch();
          break;

        case "Exit":
          connection.end();
          break;
      }

    });
  }


