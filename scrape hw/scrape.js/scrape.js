var axios = require ("axios");
var cheerio = require ("cheerio");

function scrape(){
    axios.get("http://www.nytimes.com").then(function(res){
        // this is a boiler plate for cheerio
        var $ = cheerio.load(res.data)
        console.log($)
        var nytimes = []
        $("article").each(function(x, article){
            var title = $(this).find("h2").text()
            var URL = $(this).find("a").attr("href")
            var summary = $(this).find("p").text()
            var objart = {
                headline:title,
                url:URL,
                summary:summary
            }
            nytimes.push(objart)
        })
        console.log(nytimes)
    })

}
scrape()