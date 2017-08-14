var express = require("express");
var router = express.Router();

//import the burger model
var burger = require ("../models/burger.js");

//set up routes
router.get("/", function (req, res){
	burger.all(function(data){
		var burgerObject = {burgers: data};
		console.log(burgerObject);
		res.render("index", burgerObject);
	});
});

router.post("/", function (req, res){
	burger.create(["burger_name"],[req.body.burger_name],function (data){
		res.redirect("/");
	});
});

router.put("/:id",function (req,res){

    var condition = "id = " + req.params.id;

    console.log("condition", condition);

  burger.update({"devoured": req.body.devoured}, condition, function (data){

      res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;