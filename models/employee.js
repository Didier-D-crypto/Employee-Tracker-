
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
             message: "Look up all departments.",
             
           
        })
        .then(function (answer) {
          connection.query(query, answer.findEmployee, function (err, res) {
                if (err) throw err;

                 console.log(res);  
             for (let i=0; i<res.length; i++) {
                " First Name: " +
                res[i].first_name +
                " || Last Name: " +
                res[i].last_name +
                " || Role Id: " +
                res[i].role_id +
                "||  Manager Id: " +
                res[i].manager_id
             };
            }
        ,)}); 
           search()  

 } 




function employeeDepSearch() {
        connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                console.log(
                    " First Name: " +
                    res[i].first_name +
                    " || Last Name: " +
                    res[i].last_name +
                    " || Role Id: " +
                    res[i].role_id +
                    "||  Manager Id: " +
                    res[i].manager_id
                );
                }
        });
        Search();
    }



    function employeeDepSearch() {
        connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
             for (let i = 0; i < res.length; i++) {
                console.log(
                res[i].name
                
                
                
                 );
             }
        });
        Search();
        }
    
//function EmpSpecSearch() {
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

function RoleSearch() {
        
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
         for (let i = 0; i < res.length; i++) {
            console.log(
            res[i].title + " | " +
            res[i].salary  
    
             );
         }
    });
    Search();
    }
