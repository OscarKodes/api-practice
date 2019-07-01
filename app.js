const express = require("express");
const request = require("request");

const app = express();

app.set('view engine','ejs');

app.get("/", function(req, res){

  request('https://pokeapi.co/api/v2/pokemon/ditto/', function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else {
      let dataObj = JSON.parse(body);

      res.render("index", {sprites: dataObj.sprites})

    }
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
