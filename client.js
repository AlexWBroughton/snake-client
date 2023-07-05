const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15' ,// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Successfully connected to game server");
  });
  conn.on('data', (data) => {
    console.log(`${data}`);
  });
  conn.on("connect", () => {
    conn.write("Name: AB");
  });

  

  return conn;
};

module.exports = {connect};