const request = require("request");

const forcast = (long, lat, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=510743332dfa4e81a0381000231207&q=${long},${lat}`;
  request({ url, json: true }, (error, Response) => {
    if (error) {
      callback("Can’t connect to wheatherapi sever", undefined);
    } else if (Response.body.error) {
      callback(Response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        `In ${Response.body.location.name} It is ${Response.body.current.condition.text} and the temprature is ${Response.body.current.temp_c} °C`
      );
    }
  });
};

module.exports = forcast;
