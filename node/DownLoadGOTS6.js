http = require("http")
fs = require("fs");
cheerio = require('cheerio');

//http://pianyuan.net/m_DwwXcfAc0.html

// webpageurl and callback function
var GetListPageHtml = function (url, cb, num) {
    http.get(url, function (res) {
        var size = 0;
        var chunks = [];
        res.on('data', function (chunk) {
            size += chunk.length;
            chunks.push(chunk);
        });
        res.on('end', function () {
            var data = Buffer.concat(chunks, size);
            cb(data, num)
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}

var GetTorrentPage = function (html, num) {
    $ = cheerio.load(html);
    var list = $("div.related.allres table tbody tr td a");
    //var pages = [];
    list.each(function (idx, element) {
        var $element = $(element);
        var href = "http://pianyuan.net" + $element.attr("href")
        var text = $element.text() + ".torrent";
        if (text.indexOf(num) >= 0) {
            //pages.push({
            //    href: "http://pianyuan.net" + href,
            //    text: text
            //})
            //console.log(href + "----->" + text);
            GetPageHtml(href, text);
        }
    })
    //console.log(pages.join(";"));
    //console.log(list.length);
}

var GetPageHtml = function (url, name) {
    //
    http.get(url, function (res) {
        var size = 0;
        var chunks = [];
        res.on('data', function (chunk) {
            size += chunk.length;
            chunks.push(chunk);
        });
        res.on('end', function () {
            var data = Buffer.concat(chunks, size);
            var $ = cheerio.load(data);
            //var $tags = $("div.tdown"));
            //var torrent = "http://static.pianyuan.net" + $("div.tdown a.btn-danger").attr("href");
            var torrent = $("div.tdown a.btn-danger").attr("href");
            var magnet = $("div.tdown a.btn-primary").attr("href");
            var zimu = $("div.tdown a.btn-warning").attr("href");
            console.log(torrent + "----->" + name);
            DownLoadTorrent(torrent, name);
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}

var get_options = {
    host: 'http://static.pianyuan.net', //111.202.114.30
    port: '80',
    path: '/task/getDoneGroupList',
    method: 'GET',
    headers: {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,\*\/\*;q=0.8',
        "Accept-Encoding":"gzip, deflate, sdch",
        "Accept-Language": "zh-CN,zh;q=0.8",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Cookie": "__cfduid=dc4de8d91833fad741ebaeb499edea7171462526890; PHPSESSID=bf1rfjo1vt5k112r88j4o1cru0; Hm_lvt_0ef4d2ab3569e6ba0768bca5c4a7b7bf=1462526800; Hm_lpvt_0ef4d2ab3569e6ba0768bca5c4a7b7bf=1462788122",
        "Host": "pianyuan.net",
        "Referer": "http://pianyuan.net/m_DwwXcfAc0.html",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36"
    }
};

var DownLoadTorrent = function (url, name) {
    get_options.path = url;
    http.get(get_options, function (res) {
        var size = 0;
        var chunks = [];
        res.on('data', function (chunk) {
            size += chunk.length;
            chunks.push(chunk);
        });
        res.on('end', function () {
            //console.log(chunks);
            fs.writeFile(name, chunks, "binary", function (err) {
                if (err) {
                    console.log("down fail");
                }
                console.log("down success");
            });
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}

var Start = function (num) {
    GetListPageHtml("http://pianyuan.net/m_DwwXcfAc0.html", GetTorrentPage, num);
}

Start("S06E03");