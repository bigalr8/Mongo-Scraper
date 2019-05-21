//controllers/articlesController.js
//Routes
var express = require("express");

var router = express.Router();

var path = require("path");
//TO DO: Get scraped data from database
var articles = [
    {
    article: "This just in"
    }, {
    article: "They won!"
    }
];

router.get("/articles", function (req, res) {
    console.log("articles: ", articles)
    res.render("./layouts/all-articles", {
        media: articles,
        source: "Philly.com"
    }); 

 
});
 
var article = require("../models/index.js");

module.exports = router;