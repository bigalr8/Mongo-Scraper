//server.js
//Libraries, tools, and listener ======================================================

//express backend framework
var express = require("express");

//automated logging of requests, responses and related data. When added as a middleware to an express/connect app, by default it should log statements to stdout showing details of: remote ip, request method, http version, response status, user agent etc.
var logger = require("morgan");

//mongoose Object modeling tool for MongoDB to define the schema for the documents in a collection
var mongoose = require("mongoose");

//Axios promise-based HTTP client for HTTP requests through both the browser and node.js environment
var axios = require("axios");

//Cheerio subset of core jQuery for efficient DOM model parsing, manipulating, and rendering
var cheerio = require("cheerio");

//Express handlebars template engine
var exphbs = require("express-handlebars");

//initialize ===========================================================================
var app = express();

//Configure middeleware =================================================================
//Set morgan logger for "development" logging
app.use(logger("dev"));

//Use express middleware to parse encoded http request payload body
app.use(express.urlencoded({ extended:true}));

//Use express middleware to parse incoming requests with JSON payloads
app.use(express.json());

//Use express middleware to serve static assets such as HTML files, images, etc
app.use(express.static("public"));

//Configure Database ====================================================================
//Require all data models
var db = require("./models");
//Connect to Mongo database
mongoose.connect("mongodb://localhost/mongoScrapedb", { useNewUrlParser: true });


// Set Handlebars =======================================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes =================================================================================
// Import routes and give the server access to them.
var routes = require("./controllers/articlesController.js");
app.use(routes);

// Start server listener 
var PORT = 8000;
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});




 