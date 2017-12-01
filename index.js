var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    var temp = {"Hello": "this is a json"};
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(temp);

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);
