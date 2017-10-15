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


/*app.get("/about", function (req, res) => {
  res.send("Hey");
});

app.get("/", function (req, res) => {
  res.redirect("/colors");
});

app.get("/colors", function (req, res) => {
  res.send("What up?");
});*/

app.listen(3000);
