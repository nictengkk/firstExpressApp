var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "oink",
    cow: "moo",
    dog: "woof woof"
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'.");
});

app.get("/repeat/:word/:times", function(req, res) {
  var word = req.params.word;
  var times = Number(req.params.times);
  res.send((word + " ").repeat(times));
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(5500, function(req, res) {});
