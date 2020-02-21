/ Import the ORM to create functions that will interact with the database.
var orm = require("../config/employee.js");

var alo = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("employee", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("employee", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (employeeController.js).
module.exports = employee;
