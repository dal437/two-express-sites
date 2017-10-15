// bandz.js
const express = require('express');
const path = require("path");
const publicPath = path.resolve(__dirname, "public");


const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'hbs')

app.use(express.static(publicPath));
app.use(function(req, res, next) {
   console.log(req.method, req.path);
   next();
});
app.use(bodyParser.urlencoded({extended: false}))

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

/*create a GET form that has a blank action (so that submissions request the same path); this is the filter form:
use radio buttons to allow the user to choose which category to filter by
name the radio buttons filterGenre
the values of the radio buttons should be rock, pop, hip-hop, electronic, metal, and jazz
create a submit button
create a POST form that has a blank action (so that submissions request the same path); this is the add form:
create 2 text input fields with the attributes: name , location and description, respectively
a set of radio buttons, each with nameed genre …
the values of the radio buttons should be rock, pop, hip-hop, electronic, metal, and jazz*/

app.get('/', (req, res) => {
	res.render('layout.hbs');
});

/*app.post('/', (req, res) => {
	bandName = req.body.name;
	res.redirect('/');
});*/


app.listen(3000);
