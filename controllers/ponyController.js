// Requiring the Express package
var express = require("express");
var connection = require("../config/connections.js");

// Creating the `router` for the app,
var router = express.Router();

// Import the orm to use its database functions.
var orm = require("../config/orm.js");

// Create all the routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    orm.readAll(function(data) {
      var hbsObject = {
        ponies: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
router.post("/add", function(req, res) {
    connection.query("INSERT INTO ponies (pony_name) VALUES (?);", [req.body.newPony], function(err, results) {
        if (err) throw err;
        console.log("here is pony name: " +req.body.newPony);
        res.redirect("/");
    })
  
      });
  
router.put("/update", function(req, res) {
    connection.query("UPDATE ponies SET pony_name = ? WHERE id = ?", [req.body.newPonyNM, req.body.id], function(err,results) {
        if (err) throw err;
        console.log("Update: " + res);
        res.redirect("/");
    })
});

router.put("/ride", function(req, res){
    connection.query("UPDATE ponies SET ride = 1 WHERE id = ?", [req.body.data-id], function(err, results) {
        if (err) throw err;
        res.redirect("/");
    })
});
  // Export routes for server.js to use.
  module.exports = router;
  