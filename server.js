var express = require("express");
var bodyParser = require("body-parser");
var connection = require("./config/connections.js");
var path = require("path");

// Sets up the Express App to create server
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// =============================================================

// app.use('public',express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    connection.query("SELECT * FROM ponies;", function(err, data) {
        if (err) throw err;
    res.render("index", {ponies: data});
})
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
