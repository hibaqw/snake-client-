const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: REM");
    conn.write("Move: up");
    //sending messages
    conn.write("Say: Hello")

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};

console.log("Connecting ...");
connect();
module.exports= {connect};
