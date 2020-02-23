
// Import the ORM to create functions that will interact with the database.

const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "EmployeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    search();
});

function search() {
    inquirer.prompt({

        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Find Employee by Department",
            "Search for specific Employee",
            "Find Employee Role",
            "Exit",
        ]
    })
        .then(function (answer) {
            switch (answer.action) {
                case "Add Department":
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

function departmentSearch() {
    inquirer
        .prompt({
            name: "findEmployee",
            type: "input",
            message: "Who would you like to look up?",
           
        })
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?", {
                name: answer.findEmployee,

            },
            function (err, res) {
                if (err) throw err;
             console.log(res)
        })   
        search()     
});
}

function departmentSearch() {
          inquirer
           .prompt({
             name: "findEmployee",
             type: "input",
             message: "Look up all employees.",
             
           
        })
        .then(function (answer) {
          connection.query(query, answer.findEmployee, function (err, res) {
                if (err) throw err;

                 console.log(res);  
             for (let i=0; i<res.length; i++) {
              
            }
         })      
             search()     
 }); 
 } 





            // var query = "SELECT * FROM ? WHERE ?";
            // connection.query(query, answer.artist, function (err, res) {
            //     if (err) throw err;
            //     for (var i = 0; i < res.length; i++) {
            //         console.log("Position: " + res[i].position + " || " + res[i]. + " ||  " + res[i].year);
            //     }
            //     runSearch();



function employeeDepSearch() {
         var query = "SELECT employee FROM  GROUP BY employee HAVING count(*) > 1";
        connection.query(query, function (err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
                               console.log(res[i].employee);
           }
          search();
        });
    }


// function EmpSpecSearch() {
//         inquirer
//             .prompt([
//                 {
//                     name: "start",
//                     type: "input",
//                     message: "Enter starting position: ",
//                     validate: function (value) {
//                         if (isNaN(value) === false) {
//                             return true;
//                         }
//                         return false;
//                     }
//                 },
//                 {
//                     name: "end",
//                     type: "input",
//                     message: "Enter ending position: ",
//                     validate: function (value) {
//                         if (isNaN(value) === false) {
//                             return true;
//                         }
//                         return false;
//                     }
//                 }
//             ])
//             .then(function (answer) {
//                 var query = "SELECT first_name,last_name, FROM position WHERE position BETWEEN ? AND ?";
//                 connection.query(query, [answer.start, answer.end], function (err, res) {
//                     if (err) throw err;
//                     for (var i = 0; i < res.length; i++) {
//                         console.log(

//                         );
//                     }
//                     runSearch();
//                 });
//             });
// 

// function RoleSearch() {
//         inquirer
//             .prompt({
//                 name: "song",
//                 type: "input",
//                 message: "What song would you like to look for?"
//             })
//             .then(function (answer) {
//                 console.log(answer.);
//                 connection.query("SELECT * FROM  WHERE ?", { : answer. }, function (err, res) {
//                     if (err) throw err;
//                     console.log(
//                     );
//                     runSearch();
//                 });
//
