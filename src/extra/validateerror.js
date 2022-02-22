const colors = require("colors");

const validateerror = (ele, index) => {
  console.log("-----------------------------");
  console.error(index + 1);
  console.log(colors.red("check your middlewares"));
  console.log(colors.yellow("middlewares ==> ", ele.middlewares));

  console.log(colors.red("check your controller"));
  console.log(colors.yellow("controller ==>>", ele.controller));

  console.log(colors.yellow("method ==>", ele.method));
  console.log(colors.yellow("path ==>", ele.path));
  console.log("-----------------------------");
};

module.exports = validateerror;
