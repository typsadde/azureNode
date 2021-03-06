var request = require('request');
var cheerio = require('cheerio');

var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.setHeader('Content-Type', 'application/json')
        res.send('{"Hello":"World"}');
    });

    app.get("/restaurant", function (req, res) {
        var DayMenuName = req.query.Menu;
        var Day = req.query.Day;
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];        
        var now = new Date();
        var today = days[now.getDay()].toLowerCase();

        res.setHeader('Content-Type', 'application/json')
        url = "https://eurest.mashie.com/public/menu/sn%C3%A4ckviken/bad07c57?country=se"
        request(url, function (error, response, html) {
            var $ = cheerio.load(html);
            var script = $('script').first().toString();
            script = script.replace('<script>', '')
            script = script.replace('</script>', '')
            script = script.replace('var weekData = ', '')
            script = script.replace(/new Date/g, "")
            script = script.replace(/[()]/g, "");
            try {
                parsedScript = JSON.parse(script);
            } catch (e) {
                console.log("THIS IS THE ERROR!!!!!!:" + e.message)
            }

            NUMBER_OF_DAYS = parsedScript["Weeks"][0]["Days"].length;
            NUMBER_OF_MENUS = parsedScript["Weeks"][0]["Days"][0]["DayMenus"].length;

            //console.log(script);
            var mondayMenu = [];
            var tuesdayMenu = [];
            var wednesdayMenu = [];
            var thursdayMenu = [];
            var fridayMenu = [];

            for (var i = 0; i < NUMBER_OF_MENUS; i++) {
                mondayMenu.push(parsedScript["Weeks"][0]["Days"][0]["DayMenus"][i]["DayMenuName"])
            }
            for (var i = 0; i < NUMBER_OF_MENUS; i++) {
                tuesdayMenu.push(parsedScript["Weeks"][0]["Days"][1]["DayMenus"][i]["DayMenuName"])
            }
            for (var i = 0; i < NUMBER_OF_MENUS; i++) {
                wednesdayMenu.push(parsedScript["Weeks"][0]["Days"][2]["DayMenus"][i]["DayMenuName"])
            }
            for (var i = 0; i < NUMBER_OF_MENUS; i++) {
                thursdayMenu.push(parsedScript["Weeks"][0]["Days"][3]["DayMenus"][i]["DayMenuName"])
            }
            for (var i = 0; i < NUMBER_OF_MENUS; i++) {
                fridayMenu.push(parsedScript["Weeks"][0]["Days"][4]["DayMenus"][i]["DayMenuName"])
            }

            var menuArray = [mondayMenu, tuesdayMenu, wednesdayMenu, thursdayMenu, fridayMenu];

            // console.log(menuArray[]);
            var menuToGet = menuArray;
            if (Day) {
                Day = Day.toString();
                if (Day=='today') {
                    Day = today;
                }
                if (Day.toLowerCase() == "monday") {
                    menuToGet = menuArray[0];
                }
                else if (Day.toLowerCase() == "tuesday") {
                    menuToGet = menuArray[1];
                }
                else if (Day.toLowerCase() == "wednesday") {
                    menuToGet = menuArray[2];
                }
                else if (Day.toLowerCase() == "thursday") {
                    menuToGet = menuArray[3];
                }
                else if (Day.toLowerCase() == "friday") {
                    menuToGet = menuArray[4];
                }
            }

            res.setHeader("Content-Type", "application/json");
            res.send({"menu":menuToGet});
        });
    });

    app.get("/currency", function (req, res) {
        var base = req.query.base;
        var symbols = req.query.symbols;
        var url = "https://api.fixer.io/latest"
        if (base) {
            url = "https://api.fixer.io/latest?base=" + base;
        }
        if (base && symbols) {
            url = "https://api.fixer.io/latest?base=" + base + '&' + 'symbols=' + symbols;
        }
        request(url, function (error, response, body) {
            res.setHeader('Content-Type', 'application/json')
            res.send(body);
        });
    });
}

module.exports = appRouter;