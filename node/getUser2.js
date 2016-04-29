http = require("http");
fs = require("fs");
querystring = require('querystring');
cheerio = require('cheerio');
var reqUrl = "http://ife.baidu.com/user/profile?userId=";
var minvalue = 0;
var maxvalue = 20;
var groups = [];


function PostData(pageID) {
    var reqData = querystring.stringify({
        pageNo: pageID,
        taskId: 1
    });

    var post_options = {
        host: 'ife.baidu.com', //111.202.114.30
        port: '80',
        path: '/task/getDoneGroupList',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': reqData.length,
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Length': 17,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': 'BAIDUID=04BACEDCB09405820107F90AE2E72FE2:FG=1; BIDUPSID=04BACEDCB09405820107F90AE2E72FE2; PSTM=1448529972; noteReadList=%5B%22657%22%2C%22175%22%5D; taskReadList=%5B1%2C13%2C2%2C3%2C4%2C25%2C18%2C14%2C36%2C28%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C15%2C16%2C17%2C19%2C20%2C21%2C22%2C23%2C24%2C26%2C27%2C29%2C30%2C31%2C32%2C33%2C34%2C35%2C51%2C42%2C50%2C52%5D; BAEID=360A36CF0BDFA902BBF6874E15E4E1D0; MCITY=-%3A; BDSFRCVID=CKksJeC62RxW6ubRKiOxMgFwgmKKlF6TH6ao1L192tgyibFsP_XZEG0PtOlQpYD-DOOYogKK0mOTHvbP; H_BDCLCKID_SF=tJKH_C85JDvhDRTvhCTjh-FSMgTBKI62aKDs5hvo-hcqEIL40R7RjRLV04R0Wbvu52cf0b6cWbRPMxbSj4QoDf7LeH5JKbc0KecebU79yq5nhMJmXPvGKhFvqtO9Whcy523ion6vQpn-Hxtu-n5jHjoWDGD83f; PHPSESSID=s9sjm8g6g0679etkbemkge4eu6; bds_89XtMi6980UVMb5iMiRAL27g_state=cf5f481b8a53c544fe5b8f8457821468; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; H_PS_PSSID=1451_19722_19781_17949_19806_19900_19558_19808_19843_19860_14972_12413; Hm_lvt_d422e3cabaaaa7445e54622b97472bab=1461640966,1461720881,1461804373,1461896974; Hm_lpvt_d422e3cabaaaa7445e54622b97472bab=1461921141',
            'Host': 'ife.baidu.com',
            'Origin': 'http://ife.baidu.com',
            'Pragma': 'no-cache',
            'Referer': 'http://ife.baidu.com/task/detail?taskId=6',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
        }
    };

    var post_req = http.request(post_options, function(response) {
        var responseText = [];
        var size = 0;
        response.on('data', function(data) {
            responseText.push(data);
            size += data.length;
        });
        response.on('end', function() {
            // Buffer 是node.js 自带的库，直接使用
            responseText = Buffer.concat(responseText, size);

            DealJson(responseText,pageID);


            //console.log(responseText);
            //fs.writeFile("myfile" + pageID + ".json", responseText, function(err) {
            //    if (!err)
            //        console.log("Page " + pageID + " 写入成功！")
            //})

            //callback(responseText);
        });
    });

    // post the data
    post_req.write(reqData);
    post_req.end();
}

function DealJson(jsonStr,pageID) {
    var js = JSON.parse(jsonStr);
    if(js.data==null)
    {
        console.log("写入失败！------------------------"+pageID)
        return;
    } 
    var gs = js.data.listData;
    for (item in gs) {
        //console.log();
        var gid = gs[item].groupUrl.split("groupId=")[1];
        groups.push(gid);
    }
    fs.writeFile("groupID.json", groups.join(","), function(err) {
        if (!err)
            console.log("文件保存失败") 

        console.log(groups.length)

    })
}

function Start() {
    for (var i = 0; i < 20; i++) {
        PostData(i)
    };
}

Start();
