var appRouter = function(app) {
    
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/hello", function(req, res) {
        res.send("Hello from hello path");
    });
}
    
module.exports = appRouter;