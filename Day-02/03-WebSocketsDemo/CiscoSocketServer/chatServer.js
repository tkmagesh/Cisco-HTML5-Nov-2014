var nodeJsWebSocket = require("nodejs-websocket");
var webSocketServer = nodeJsWebSocket.createServer(onNewConnection);
function onNewConnection(con){
    console.log("A new connection is established");
    con.on("text", function(msg){
        webSocketServer
            .connections
            .filter(function(connection){
                return connection !== con;
            })
            .forEach(function(connection){
                connection.sendText(msg);
            });
    });
}
webSocketServer.listen("9090");
console.log("Socket server listening on port 9090..!");