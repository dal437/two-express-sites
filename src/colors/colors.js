// colors.js
const express = require('express');
const path = require("path");
const app = express();
const Color = require('./colorlib');

app.set('view engine', 'hbs');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(function(req, res, next) {
   next();
});

app.get("/", (req, res) => {
  res.redirect('/colors');
});

app.get("/colors", (req, res) => {
  if(!req.query.r && !req.query.g && !req.query.b){
    return res.render('home.hbs');
  }
  const r = parseInt(req.query.r);
  const g = parseInt(req.query.g);
  const b = parseInt(req.query.b);
  const total = parseInt(req.query.total);
  if ((r >= 0 && r <= 255) && (g >= 0 && g <= 255) && (b >= 0 && b <= 255) && (total >= 0 && total <= 10)){
    const color = new Color(r, g, b, total);
    const x = color.getColorCombination();
    res.render('home.hbs', {result:x});
  }
  else{
    res.render('home.hbs', {err: 'Hey, "Red", "Green", and "Blue" should be from 0 through 255, and the "How Many?" should be between 2 and 10!'});
  }
});

app.get("/about", (req, res) => {
  res.render('about.hbs');
});

app.listen(3000);
