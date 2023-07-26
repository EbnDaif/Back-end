const forcast = require("./mods/forcast");

const geocode = require("./mods/geocode");
if (process.argv[2]) {
  geocode(process.argv[2], (error, data) => {
    if (data) {
      console.log(
        `the name of the country is ${process.argv[2]} the  latitude ${data.lat} and the longitude is ${data.long} `
      );

      forcast(data.lat, data.long, (error, data) => {
        console.log(error);
        console.log(data);

      });
    } else {
      console.log(error);
    }
  });
} else {
  console.log("please enter the name of the country");
}
