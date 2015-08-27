var express = require('express');
var app = express();
//bodyparser to parse info from http requests of post, get and json
var bodyParser = require('body-parser');
//helps out with path to different urls
var path = require("path");
//lets us use websockets
var socket = require("socket.io");
//ejs is our html renderer uses javascript embedded
var ejs = require("ejs");
//allows us to delte something we normally can't do with just body-parser
var methodOverride = require("method-override" )
//use body parser
app.use(bodyParser.urlencoded({ extended: true }));
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

//root route to render the endex.ejs view
app.get('/', function(req, res){
  res.render('index');
})
//post route for adding a user
app.post('users', function(req,res){
  console.log("POST DATA", req.body);
  //this is where we would add the user to the database
  //then redirect to the root route
  res.redirect('/');
})
//tell the express app to listen on port 8000
app.listen(8000, function(){
  console.log("listening on port 8000")
})
