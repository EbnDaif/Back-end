const request = require("request");

const forecast = (long, lat, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=510743332dfa4e81a0381000231207&q=${long},${lat}`;
  request({ url, json: true }, (error, Response) => {
    if (error) {
      callback("Can’t connect to wheatherapi sever", undefined);
    } else if (Response.body.error) {
      callback(Response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        {
          name: Response.body.location.name,
          current: Response.body.current.condition.text,
          temp:Response.body.current.temp_c
        }
      );
    }
  });
};

module.exports = forecast;
