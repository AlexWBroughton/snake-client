const net = require("net");
const connect = require("./client");


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};



const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};




setupInput();

console.log("Connecting ...");
connect();