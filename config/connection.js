// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: "8889",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function (err){
    if (err) {
        console.log("erroc connection: " + err.stack);
        return
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
