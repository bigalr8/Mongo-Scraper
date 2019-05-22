# Mongo Scraper
Cheerio Scraping into Mongo Datbase

## Description 
This full stack app models a news montage where article headlines and links are taken from a a website and stored for access along with user notations on them.  

## Technologies and tools
The app is developed using HTML, CSS, javascript, JQuery, node.JS nad MongoDb.
 
It uses the following NPM packages: 
* Express - for server functions
* Path - for obtaing a path to files for all locally installed module executables
* Morgan - Automated logging of requests, responses and related data, such as remote ip, request method, http version, response status, user agent etc.
* Mongoose - Object modeling tool for MongoDB to define the schema for the documents in a collection
* Axios - promise-based HTTP client for HTTP requests through both the browser and node.js environment
* Cheerio - subset of core jQuery for efficient DOM model parsing, manipulating, and rendering
* Express handlebars HTML template engine

It uses the following middle-ware:
* The express.urlencoded function to parse encoded URLs
* The express.json function to parse requests with json payloads

## Sources
The data used for the app is scraped from the WHYY.org public broadcasting news site. 

## Functionality

HTML routes are defined in the controller directory for scraping data and for database "CRUD" data storgage and maintenance. 

Data schemas are defined in the model directory. 

UI views are defined in the public/views directories. 

A user may view previously scraped articles or scrape new atricles.
  

## Components
* controllers/articlesController.js - API Rotes
 
* models/Article.js - Article collection schema

* models/index.js - object with all models for export

* models/Note.js - Note collection schema

* public/assets/css/styles.css - CSS Stylesheeet

* public/assets/js/app.js - Broweser Event handlers

* views/layouts/partials/notes.handlebars - Notes handlebars 

* views/layouts/all-articles.handlebars - Article list handlebars template 

* views/layouts/main.handlebars - Handlebars wrapper 

* views/layouts/index.handlebars - Landing page handlebars template 

* server.js - Libraries, tools, and listener 





## Instructions 
* The server is started with the command 'node server.js". 
* The app is access via HeroKu using the "https://glacial-fortress-38607.herokuapp.com/" url

## Artifacts
* `bigalr8/Mongo-Scraper` - github repo
* `"                       "` - Heroku url
* ` https://bigalr8.github.io/Basic-Portfolio/` - Portfolio with link to 'Friend-Finder'        

## Notes
I encountered issues with scraping where I attemped to get an article summary that was in one of a seqeunce of plain paragraphs.  

I did not complete the Article and Notes maintence funtionality. encountered issues with using 'post' because a "slim" version of jquery was specified

I used class activity code for references. 

I did not deploy to Heroku.  