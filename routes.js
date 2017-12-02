var request = require('request');
var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.setHeader('Content-Type','application/json')        
        res.send('{"Hello":"World"}');
    });

    app.get("/restaurants", function(req, res) {
        res.setHeader('Content-Type','application/json')
        url = "https://eurest.mashie.com/public/menu/motorkringlan/a7b70b36?country=se"        
        request(url, function(error,response,body){
            var htmlResponse = document.createElement('div');
            htmlResponse.innerHTML = body;
            var scripts = htmlResponse.getElementsByTagName('script');
            res.setHeader('Content-Type','application/json')
            res.send(scripts);
        });
    });

    app.get("/currency", function(req, res) {
        var base = req.query.base;
        var symbols = req.query.symbols;
        var url = "https://api.fixer.io/latest"
        if (base) {
            url = "https://api.fixer.io/latest?base="+base;
        }
        if (base&&symbols) {
            url = "https://api.fixer.io/latest?base="+base+'&'+'symbols='+symbols;
        } 
        request(url, function(error,response,body){
            res.setHeader('Content-Type','application/json')
            res.send(body);
        });
        //res.send("Hello from hello path");
    }); 
}
    
module.exports = appRouter;