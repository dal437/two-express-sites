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

/*let bands = [name: "Santana",
genre: "Latin Rock",
location: "New York, NY",
description: "Carlos Santana plays guitar", name: "Boston",
genre: "Rock",
location: "Boston, MA",
description: "The lead vocalist went to MIT", name: "Queen",
genre: "Rock",
location: "Los Angeles, CA",
description: "Freddie Mercury was an awesome singer", name: "Coldplay",
genre: "Pop",
location: "Los Angeles, CA",
description: "Clocks was one of their big hits"];*/


app.get('/', (req, res) => {
	res.render('layout.hbs');
});

/*app.post('/', (req, res) => {
	bandName = req.body.name;
	res.redirect('/');
});*/


app.listen(3000);
