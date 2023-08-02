const request = require("request");
const geocode = (address, callback) => {
  const geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZWJuZGFpZiIsImEiOiJjbGtkeHRrdGMwamhzM2R1OG9lcW80cmdqIn0.hC8CS0Jw3pnsLbmH9Uu1ag`;
  request({ url: geourl, json: true }, (error, Response) => {
    if (error) {
      callback("Can’t connect to geocode sever", undefined);
    } else if (Response.body.message) {
      callback(Response.body.message, undefined);
    } else if (Response.body.features.length == 0) {
      callback("Wrong location", undefined);
    } else {
      callback(undefined, {
        lat: Response.body.features[0].center[0],
        long: Response.body.features[0].center[1],
      });
    }
  });
};
module.exports = geocode;
