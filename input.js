let connection;



const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  switch (key) {
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "w":
      connection.write("Move: up");
      break;
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
