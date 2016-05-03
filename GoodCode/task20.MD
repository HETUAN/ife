## 20. 
### 题目：
1. 基于任务18进行升级
2. 将新元素输入框从input改为textarea
3. 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
4. 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识

### 分析

知识点：实践JavaScript数组、字符串相关操作、正则表达式的使用

代码：

``` html
// 其他人的代码

 <!DOCTYPE html>
<html>

<head>
    <title>task20</title>
    <meta charset="UTF-8">
    <style type="text/css">
    #result {
        display: flex;
    }
    
    #result div {
        background-color: pink;
        height: 30px;
        line-height: 30px;
        min-width: 30px;
        text-align: center;
        margin: 5px;
    }
    
    #result span {
        background-color: red;
    }
    </style>
</head>

<body>
    <div class="ctrl">
        <textarea rows="5" cols="20" placeholder="请输入字符并用不同符号分隔" id="textArea"></textarea>
        <button id="insert">插入</button>
        <button id="search">查询</button>
        <input id="searchInput"></input>
    </div>
    <div id="result"></div>
    <script type="text/javascript">
    $ = function(el) {
        return document.querySelector(el);
    }
    var arrData = [];
    $('#insert').onclick = function() {
        var str = $('#textArea').value.trim();
        var arrWord = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e) {
            if (e != null && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });
        arrData = arrData.concat(arrWord);
        render();
    }
    $('#search').onclick = function() {
        var str = $('#searchInput').value.trim();
        render(str);
    }
    function render(str) {
        $('#result').innerHTML = arrData.map(function(d) {
            if (str != null && str.length > 0) {
                d = d.replace(new RegExp(str, "g"), "<span class='select'>" + str + "</span>");
            }
            return '<div>' + d + '</div>';
        }).join('');
    }
    </script>
</body>

</html>

// 自己的代码：

<!DOCTYPE>
<html>

<head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 17</title>
    <script src="task.js"></script>
    <style type="text/css">
    textarea {
        width: 200px;
        height: 200px;
    }
    
    span {
        margin-left: 10px;
        background-color: gray;
    }
    </style>
    <script type="text/javascript">
    window.onload = function() {
        var inpttext = document.getElementById("inpttext")
        var insertbtn = document.getElementById("insertbtn")
        var sertext = document.getElementById("sertext")
        var searchbtn = document.getElementById("searchbtn")
        var show = document.getElementById("show")
        var loadtextarea = function() {
            var inpttext = document.getElementById("inpttext")
            var text = inpttext.value;
            //数字、中文、英文等， 回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等
            var texts = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/i).filter(function(d) {
                return d != '';
            });
            var textStr = "";
            var curStr = "";
            for (t in texts) {
                console.log(texts[t])
                textStr += "<span>" + texts[t] + "</span>";
            }
            var show = document.getElementById("show")
            show.innerHTML = textStr;
        }
        insertbtn.onclick = loadtextarea;
        searchbtn.onclick = function() {
            loadtextarea();
            var s = document.getElementById("sertext").value;
            var show = document.getElementById("show");
            var spans = show.getElementsByTagName("span");
            var newHtml = "";
            for (idx in spans) {
                var curspan = spans[idx];
                var curStr = curspan.innerText;
                if (curStr === undefined)
                    continue;
                var curStrs = curStr.split(s);
                if (curStrs.length > 1) {
                    var len = curStrs.length;
                    newHtml += "<span >";
                    for (var idx in curStrs) {
                        newHtml += curStrs[idx];
                        if (idx != curStrs.length - 1)
                            newHtml += "<span style=\"background-color:red; margin-left:0px; \">" + s + "</span>";
                    }
                    newHtml += "</span>";
                } else {
                    newHtml += "<span >" + curStr + "</span>";
                }
            }
            show.innerHTML = newHtml;
        }
    }
    </script>
</head>

<body>
    <textarea id="inpttext"></textarea>
    <input type="button" id="insertbtn" value="插入" />
    <input type="text" id="sertext" value="" />
    <input type="button" id="searchbtn" value="查找" />
    <div id="show"></div>
</body>

</html> 

```
