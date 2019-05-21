//controllers/articlesController.js
//Routes
var express = require("express");

var router = express.Router();
 
var db = require("../models");

var path = require("path");
//TO DO: Get scraped data from database
var articles = [
    {
    article: "This just in"
    }, {
    article: "They won!"
    }
];
/*
router.get("/articles", function (req, res) {
    console.log("articles: ", articles)
    res.render("./layouts/all-articles", {
        media: articles,
        source: "Philly.com"
    }); 

 
}); */
/*
router.get("/articles", function (req, res) {
    //console.log("articles: ", articles)
    db.Article.find({})
        .then(function(dbArticle) {
            console.log("dbArticle: ", dbArticle)
            res.json(dbArticle);
        })
        .catch(function(err) {
            res.json(err);
        });
   
});*/

router.get("/articles", function (req, res) {
    //console.log("articles: ", articles)
    db.Article.find({})
        .then(function(dbArticle) {
            console.log("dbArticle: ", dbArticle)
            res.render("./layouts/all-articles", {
                media: dbArticle,
                source: "Philly.com"
            }); 
        });    
});     

var article = require("../models/index.js");

module.exports = router;