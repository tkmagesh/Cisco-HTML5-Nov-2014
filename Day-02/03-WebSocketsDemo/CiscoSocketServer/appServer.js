var nodeJsWebSocket = require("nodejs-websocket");
var webSocketServer = nodeJsWebSocket.createServer(onNewConnection);
function onNewConnection(con){
    console.log("A new connection is established");
    con.on("text", function(msg){
        if (msg === "time"){
            var count = 0;
            var timer = setInterval(function(){
                con.sendText(new Date().toString());
                ++count;
                if (count >= 10)
                    clearInterval(timer);
            },5000);
        } else {
            console.log("Unknown message received - ", msg);
        }
    });
}
webSocketServer.listen("9090");
console.log("Socket server listening on port 9090..!");