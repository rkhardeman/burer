// set depedencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//give server access to routes
var routes = require("./controllers/burgers_controllers.js");

//handlebars npm exphbs
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});