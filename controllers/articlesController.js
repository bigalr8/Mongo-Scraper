//controllers/articlesController.js
//Routes
var express = require("express");

var router = express.Router();

var axios = require ("axios");

var cheerio = require ("cheerio");
 
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
                source: "WHYY.org"
            }); 
        });    
});     


 
router.get("/scrape", function(req, res) {
    axios.get("https://whyy.org/news/").then(function(response) {
        var $ = cheerio.load(response.data);
      
        var result = {};
      
        $(".content-mode").each(function(i, element) {
      
          result.title = $(element).find("a").attr("title");
          result.link = $(element).find("a").attr("href");
          //var summary = $(element).find("p").text();
          //var newSummary = [];
          //newSummary = summary.split(/\r?\n/);
          //console.log("newSummary: ", newSummary);
          //console.log(summary[2]);
      
          // Save these results in an object that we'll push into the results array we defined earlier
          //result.title = $(this): title,
          //  link: link,
         //   summary: newSummary[3];
          
        db.Article.create(result)
          .then(function(dbArticle) {
              console.log(dbArticle);
          })
          .catch(function(err) {
              console.log(err);
          });
      });
   
      res.send("Scrape Complete");
    });
  });

//var article = require("../models/index.js");

module.exports = router;