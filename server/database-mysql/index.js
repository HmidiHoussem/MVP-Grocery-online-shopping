var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mvpDB",
});
connection.connect(function (err) {
  if (err) console.log("Error to connect to database", err);
  else console.log("Database connected");
});

module.exports = connection;
