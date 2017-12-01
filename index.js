var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    //var temp = {"Hello": "from variable in code"};
    http.get('https://api.fixer.io/latest',(response))
    var temp = "This is text"
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(response);

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);
