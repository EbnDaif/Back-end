////////imports///////
const fs = require("fs");
///////main function ////////
const addperson = (id, fname, lname, city, age) => {
  const alldata = loaddata();
  const dublicate = alldata.filter((obj) => {
    return obj.id === id;
  });
    if (dublicate.length === 0) {
      
    alldata.push({
      id: id,
      fname,
       lname,
       city,
       age,
    });
            savechanges(alldata);

  } else console.log("-----DUBLICATED DATA-----");
};
const loaddata = () => {
  try {
    const datajson = fs.readFileSync("data.json");
    return JSON.parse(datajson);

  } catch {
    return [];
  }
};
const savechanges = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data));
};
const list = () => {
  data = loaddata();
  data.forEach((o) => {
    console.log(o.fname, o.lname, o.city);
  });
};
const readitem5 = () => {
    data = loaddata();
  console.log(data[4])
  };


const delitem = (id) => {
  const alldata = loaddata();
  const newdata = alldata.filter((o) => {
    return o.id !== id;
  });
  savechanges(newdata);
  console.log(newdata);
};
module.exports = {
  addperson,
    delitem,
  readitem5,
  list,
};
