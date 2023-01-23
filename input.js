let connection;
const setupInput = function (conn) {
    const stdin = process.stdin;
    connection = conn;
    const handleUserInput = function (data) {
        // your code here
        if (data === '\u0003') {
            process.exit();
          }
        if (data.toUpperCase()=== "W"){
          connection.write("Move: up");
        }
        if (data.toUpperCase()=== "A"){
          connection.write("Move: left");
        }
        if (data.toUpperCase()=== "S"){
          connection.write("Move: down");
        }
        if (data.toUpperCase()=== "D"){
          connection.write("Move: right");
        }
      };
    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };
module.exports = {setupInput};