var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    var temp = "This is text"
    //var tempJson = {"base":"EUR","date":"2017-12-01","rates":{"AUD":1.5693,"BGN":1.9558,"BRL":3.8824,"CAD":1.5301,"CHF":1.1691,"CNY":7.8551,"CZK":25.524,"DKK":7.442,"GBP":0.88115,"HKD":9.2853,"HRK":7.5553,"HUF":313.8,"IDR":16083.0,"ILS":4.1497,"INR":76.655,"JPY":133.7,"KRW":1287.5,"MXN":22.194,"MYR":4.862,"NOK":9.8753,"NZD":1.7349,"PHP":59.873,"PLN":4.2129,"RON":4.6305,"RUB":69.697,"SEK":9.9487,"SGD":1.6014,"THB":38.781,"TRY":4.6718,"USD":1.1885,"ZAR":16.291}}
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end('var tempJson =  {"base":"EUR","date":"2017-12-01","rates":{"AUD":1.5693,"BGN":1.9558,"BRL":3.8824,"CAD":1.5301,"CHF":1.1691,"CNY":7.8551,"CZK":25.524,"DKK":7.442,"GBP":0.88115,"HKD":9.2853,"HRK":7.5553,"HUF":313.8,"IDR":16083.0,"ILS":4.1497,"INR":76.655,"JPY":133.7,"KRW":1287.5,"MXN":22.194,"MYR":4.862,"NOK":9.8753,"NZD":1.7349,"PHP":59.873,"PLN":4.2129,"RON":4.6305,"RUB":69.697,"SEK":9.9487,"SGD":1.6014,"THB":38.781,"TRY":4.6718,"USD":1.1885,"ZAR":16.291}}');
   // response.sendDate();

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);


