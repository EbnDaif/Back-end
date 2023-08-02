const forecast = require('./mods/forcast')
const geocode = require("./mods/geocode");
const request = require('request')
const path = require("path");
const express = require("express");
var hbs = require("hbs");
const { error } = require('console');
app = express();
const port = process.env.PORT || 3000;
const  puplicdirectory=path.join(__dirname,'../public')
const viewsDirectory = path.join(__dirname, "../Temps/views");
const partialsDirectory = path.join(__dirname, "../Temps/partials");
app.use(express.static(puplicdirectory))
app.set("views", viewsDirectory);

hbs.registerPartials(partialsDirectory);


app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    Describe: "This Is The Home Page",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide address",
    });
  }
  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error });
    }
    forecast( data.long,data.lat, (error, Data) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: Data,
        location: req.query.address,
        long: data.long,
        lat:data.lat,
      });
    });
  });
});
app.get("/checkweather", (req, res) => {

  res.render("checkweather", {
      
    });
  });

app.get("*", (req, res) => {
  res.send('404 Not Found')
})

app.listen(port, () => {
  console.log("Roger That");
});
