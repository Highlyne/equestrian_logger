
// Requiring the Express package
var express = require("express");

// Creating the `router` for the app,
var router = express.Router();

// Import the model (pony.js) to use its database functions.
var myPony = require("/models/pony.js");

// Create all the routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    myPony.all(function(data) {
      var hbsObject = {
        ponies: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/ponies", function(req, res) {
    myPony.create(["name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/ponies/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition: ", condition);
  
    pony.update(
      {
        ride: req.body.ride
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  