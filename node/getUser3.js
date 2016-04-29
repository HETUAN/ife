 http = require("http");
 fs = require("fs");
 querystring = require('querystring');
 cheerio = require('cheerio');
 var reqUrl = "http://ife.baidu.com/group/profile?groupId=";
 var minvalue = 0;
 var maxvalue = 111;
 var groups = [];
 var users = [];

 function initGroup() {
     fs.readFile("groupID.json", "utf8", function(error, data) {
         if (error) throw error;
         groups = data.split(",");
         //console.log(data);
         Start();
     });
 }

 function Start() {
     for (i = minvalue; i < groups.length; i++) {
         GetPageHtml(groups[i], GetData);
         //console.log(html);
         //GetData(html)
         
     }
 }

 function GetData(html) {
     //$('h2.title').text('Hello there!');
     //$('h2').addClass('welcome');
     $ = cheerio.load(html);
     //console.log($("span.active").text());
     if ($("span.active").text() == "404")
         return;
     var userids = $('li.member');//.attr("data-id");
     var names = $('li.member a span span.member-name');
     var len = names.length;
     for(var i = 0 ; i< len;i++)
     {
     	var userid = $(userids[i]).attr("data-id");
     	var name = $(names[i]).text();
     	users.push("{"+userid+":"+name+"}");
     }

      fs.writeFile("userData.json", "["+users.join(",")+"]", function(err) {
                if (!err)
                    console.log("userData.json 写入成功！")
            })
     // console.log("----------")
     // console.log($('li.member').attr("data-id"))
     // console.log("-----")
     // console.log($($('li.member a span span.member-name')[0]).text())
     // console.log("----------")
     //console.log(userids + "---" + names);
     //users.push(obj.join(","));
 }

 // http Request
 var GetPageHtml = function(groupId, cb) {
     //console.log(groupId);
     http.get(reqUrl + groupId, function(res) {
         var size = 0;
         var chunks = [];
         res.on('data', function(chunk) {
             size += chunk.length;
             chunks.push(chunk);
         });
         res.on('end', function() {
             var data = Buffer.concat(chunks, size);
             cb(data);
             //console.log(data.toString())
         });
     }).on('error', function(e) {
         console.log("Got error: " + e.message);
     });
 }
 initGroup(); 
