var request = require('request');
var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/hello", function(req, res) {
        request("https://api.fixer.io/latest", function(error,response,body){
            res.send(body);
        });
        //res.send("Hello from hello path");
    });
}
    
module.exports = appRouter;