var http = require('http');
var request = require('request');

var server = http.createServer(function(request, response) {

    request('https://api.fixer.io/latest', function(error,response,body){
        console.log('error', error);
        console.log('statuscode', response && response.statusCode);
        console.log('body',body);
    });
    var temp = "This is text"
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(temp);
});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);


