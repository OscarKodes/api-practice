const express = require("express");
const request = require("request");
const ejs = require("ejs");

const app = express();

app.set('view engine','ejs');

app.get("/", function(req, res){

  res.render("index");
});

app.get("/results", function(req, res){
  let id = req.query.id;
  let url = 'https://pokeapi.co/api/v2/pokemon/' + id;

  request(url, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else {
      let pokemonObj = JSON.parse(body);

      res.render("results", {
        sprites: pokemonObj.sprites,
        name: pokemonObj.name,
        id: id
      });
    }
  });

});



app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
