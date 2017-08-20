// set depedencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//give server access to routes
var routes = require("./controllers/burgers_controllers.js");

//handlebars npm exphbs
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/", routes);

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, function(){
	console.log("App listening on PORT " + port);
});