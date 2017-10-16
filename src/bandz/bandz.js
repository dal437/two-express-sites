// bandz.js
const express = require('express');
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');

app.use(express.static(publicPath));
app.use(function(req, res, next) {
   console.log(req.method, req.path);
   next();
});
app.use(bodyParser.urlencoded({extended: false}));

const bands = [{name: "Santana",
genre: "Latin Rock",
location: "New York, NY",
description: "Carlos Santana plays guitar"},
{name: "Boston",
genre: "Rock",
location: "Boston, MA",
description: "The lead vocalist went to MIT"},
{name: "Coldplay",
genre: "Pop",
location: "Los Angeles, CA",
description: "Clocks was one of their big hits"}, {name: "Rapper School",
genre: "Hip-Hop",
location: "Lima, PE",
description: "These guys are from my favorite country"}];


app.get('/', (req, res) => {
  let b = bands;
  const f = req.query.filterGenre;
  if (f){
    b = b.filter(band => band.genre === f);
  }
	res.render('layout.hbs', {bands:b});
});


app.post('/', (req, res) => {
	const bandName = req.body.Bandname;
  const bandLocation = req.body.Location;
  const bandDescription = req.body.Description;
  const bandGenre = req.body.filterGenre;
  bands.push({name:bandName, genre:bandGenre, location:bandLocation, description: bandDescription});
	res.redirect('/');
});


app.listen(3000);
