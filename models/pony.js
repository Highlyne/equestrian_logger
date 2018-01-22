var orm = require("/config/orm.js");

var myPony = {
    all: function(cb) {
      orm.readAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(val, cb) {
      orm.createOne(val, function(res) {
        cb(res);
      });
    },
    update: function(colToInsert, condition, cb) {
      orm.updateOne(colToInsert, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = myPony;