///////////////////////////////////////////// imports /////////////////////////////////////////////

const fs = require("fs"); //file system module

////////////////////////////////////////// object creation ////////////////////////////////////////

const person = {
  fname: "ahmed",
  lname: "hossam",
  age: "20",
  city: "alex",
};

////////////////////////////////// change object type into json type //////////////////////////////

const personjson = JSON.stringify(person); // using JSON.stringify() methode

////////////////////////////////// create a json file//////////////////////////////////////////////

fs.writeFileSync("persondata.json", personjson); // using writesync we can create a file or just type in an existing one

////////////////////////////////// read from  a json file//////////////////////////////////////////////

console.log(fs.readFileSync("persondata.json").toString()); //readfilescync() read data from an existing file in buffer type so we use .tostring() to convert it into sting type
console.log("--------  ADDED TO THE FILE SUCCESFULY --------");

////////////////////////////////// convert to obj //////////////////////////////////////////////

const persondata = JSON.parse(fs.readFileSync("persondata.json").toString()); //using JSON.parse()
///////////////////////////////updating data methode 1///////////////////////////////
///////////////////// by calling the keys by . notation and edit its value /////////////////////////

persondata.fname = "adel";
persondata.lname = "ahmed";
persondata.age = "40";
persondata.city = "cairo";

////////////////////////////////// convert to json and save the ubdate into file //////////////////////////////////////////////
fs.writeFileSync("persondata.json", JSON.stringify(persondata));
console.log(fs.readFileSync("persondata.json").toString());

console.log("--------DATA UPDATE SUCCESSFULY--------");
