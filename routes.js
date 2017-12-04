var request = require('request');
var cheerio = require('cheerio');

var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.setHeader('Content-Type','application/json')        
        res.send('{"Hello":"World"}');
    });

    app.get("/restaurant", function(req, res) {
        res.setHeader('Content-Type','application/json')
        url = "https://eurest.mashie.com/public/menu/motorkringlan/a7b70b36?country=se"        
        request(url, function(error,response,html){

            var $ = cheerio.load(html);
            var script = $('script').first().toString();
            script = script.replace('<script>','')
            script = script.replace('</script>','')
            script = script.replace(/\s/g,'')
            script = script.replace('varweekData=','')
            script = script.replace(/"newDate("/g,"")
            script = script.replace(/")"/g,"")
            //parsedScript = JSON.parse(script);
            console.log(script);
            res.setHeader("Content-Type","application/json");
            res.send(script["Weeks"]);
        });
    });

    app.get("/curr ency", function(req, res) {
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