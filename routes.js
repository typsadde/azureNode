var request = require('request');
var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.setHeader('Content-Type','application/json')        
        res.send('{"Hello":"World"}');
    });

    app.get("currency/:optional?", function(req, res) {
        var url = "https://api.fixer.io/latest" 
        request(url, function(error,response,body){
            res.setHeader('Content-Type','application/json')
            res.send(body);
        });
        //res.send("Hello from hello path");
    }); 
}
    
module.exports = appRouter;