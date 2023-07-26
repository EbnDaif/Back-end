const request =require('request')
const path = require("path");
const express = require("express");
var hbs = require("hbs");
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
app.get("/checkweather", (req, res) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=510743332dfa4e81a0381000231207&q=egypt`;
    request({ url, json: true }, (error, Response) => {
      res.render("checkweather", {
        title:'check weather page',
        location: Response.body.location.name,
        condition: Response.body.current.condition.text,
        icon: Response.body.current.condition.icon,
        temp: Response.body.current.temp_c,
        lat: Response.body.location.lat,
        lon: Response.body.location.lon,
      });
    });

});

app.listen(port, () => {
  console.log("Roger That");
});
/*//////////
  const forcast = () => {

  };*/