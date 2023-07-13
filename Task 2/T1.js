const fs = require("fs");
const yargs = require("yargs");
const functions = require("./functions");

yargs.command({
  command: "add",
  describe: "the add command",
  builder: {
    fname: {
      describe: "the first name of the data",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "the last name of the data",
      demandOption: false,
      type: "string",
    },
  },
  handler: (x) => {
    functions.addperson(x.id, x.fname, x.lname, x.city, x.age);
  },
});
yargs.command({
  command: "delete",
  describe: "the delete command",
  builder: {
    id: {
      demandOption: true,
      describe: "type the item to delete",
    },
  },
  handler: (x) => {
    functions.delitem(x.id);
  },
});
yargs.command({
  command: "get",
  describe: "get data form database",

  handler: () => {
    functions.readitem5();
  },
});
yargs.command({
  command: "list",
  describe: "list data form database",

  handler: () => {
    functions.list();
  },
});

console.log(yargs.argv);
