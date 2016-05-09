http = require("http");
fs = require("fs");
cheerio = require('cheerio');
var reqUrl = "http://ife.baidu.com/user/profile?userId=";
var minvalue = 66;
var maxvalue = 67;
var users = [];

function Start() {
    for (i = minvalue; i < maxvalue; i++) {
        var html = GetPageHtml(i);
        console.log(html);
        GetData(html, i)
    }
    fs.writeFile("myfile.txt", users.join(";"), function (err) {
        if (!err)
            console.log("写入成功！")
    })
}

function GetData(html, userId) {
    //$('h2.title').text('Hello there!');
    //$('h2').addClass('welcome');
    $ = cheerio.load(html);
    if ($("span.active")[0].text() == "404")
        return;
    var groupIdStr = $('a.value').attr("href");
    var groupId = groupIdStr.split("?groupId=")[1];
    var name = $("span.value")[0].text();
    var obj = [groupId, userId, name]
    console.log(obj);
    users.push(obj.join(","));
}

// http Request
var GetPageHtml = function (groupId) {
    http.get(reqUrl + groupId, function (res) {
        var size = 0;
        var chunks = [];
        res.on('data', function (chunk) {
            size += chunk.length;
            chunks.push(chunk);
        });
        res.on('end', function () {
            var data = Buffer.concat(chunks, size);
            return data;
            console.log(data.toString())
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}
Start();
