//connection to mySQL
var mysql = require("mysql");

//jaws db or use local
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password:"Rh73032!",
		database: "burgers_db"
	});
};

//making a connection
connection.connect(function(err){
	if (err){
		console.errp("error connecting: " + err.stack);
		return;
	}
});

//export connection
module.exports = connection;

