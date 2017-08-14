//connection to mySQL
var mysql = require("mysql");

//looks like jawsdb will be used with heroku
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password:"",
		database: "burgers_db"
	});
};

//making a connection
connection.connect(function(err){
	if (err){
		console.errp("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadID); 
});

//export connection
module.exports = connection;