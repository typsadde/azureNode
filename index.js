/*var http = require('http');
const https = require("https");
var app = express();
var router = express.Router();
var passport = require('passport');
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("routes.js")(app);

//var server = http.createServer(function(request, response) {
/*    const url =
    "https://api.fixer.io/latest";

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      //body = JSON.parse(body);
      response.end(body);
    });
    });
});

var app = express();

app.get("/hello",
passport.authenticate('oauth-bearer', {session: false}),
function (req, res) {
    var claims = req.authInfo;
    console.log('This is from the get request');
    
    res.status(200).json({'name': claims['name']});
}
);
*/

var port = process.env.PORT || 1337;
//server.listen(port); 

var server = app.listen(port, function () {
    console.log("Server running at http://localhost:%d", port);
});



