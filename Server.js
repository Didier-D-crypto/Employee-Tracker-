var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var express = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306, //It is meant to send it to a different PORT
  user: "root",
  password: "yourRootPassword",
  database: "employee",
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.end(function(err){

});
  





 


 
