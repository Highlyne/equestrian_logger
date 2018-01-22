var connection = require("./connections.js");
// ORM object for all SQL functions
var orm= {
//  All functions include a callback to make sure it is handled in a synchronized order
    readAll: function(cb) {
        var queryString = "SELECT * FROM ponies";
        connection.query(queryString, function(err, results) {
         if (err) 
         {throw err;}
         cb(results);

        });
    },

    createOne: function(val, cb) {
        var queryString = "INSERT INTO ponies VALUES (?)"
        connection.query(queryString, [val], function(err,result) {
        if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    }
        cb(result);
        });
    },
    updateOne: function(colToInsert, condition, cb) {
        var queryString = "UPDATE ponies SET pony_name = ? WHERE id=? "
        connection.query(queryString, [newPonyName, ponyID], function(err,result) {
            if (err) throw err;
        cb(results);
    })
}

};
module.exports = orm;
