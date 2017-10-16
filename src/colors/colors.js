// colors.js
const express = require('express');
const path = require("path");
const app = express();

app.set('view engine', 'hbs');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(function(req, res, next) {
   console.log(req.method, req.path);
   next();
});

const colors = {'8B0000': 'Dark Red'}

app.get("/", (req, res) => {
  res.redirect('/colors');
});

app.get("/colors", (req, res) => {
  console.log(req.query);
  res.render('layout.hbs', {});
});

app.get("/about", (req, res) => {
  res.render('about.hbs');
});

/*app.get("/", function (req, res) => {
  res.redirect("/colors");
});

app.get("/colors", function (req, res) => {
  res.send("What up?");
});*/

app.listen(3000);
