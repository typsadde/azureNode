var request = require('request');
var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/currency", function(req, res) {
        request("https://api.fixer.io/latest", function(error,response,body){
            response.setHead('Content-Type','application/json')
            res.send(body);
        });
        //res.send("Hello from hello path");
    });
}
    
module.exports = appRouter;