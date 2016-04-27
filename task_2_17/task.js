/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
    console.log(pageState.nowGraTime);
    switch (pageState.nowGraTime) {
        case "day":
            randerChartByDay();
            break;
        case "week":
            randerChartByWeek(TransferWeek());
            break;
        case "mouth":
            randerChartByDay();
            break;
        default:
            break;
    }
}


/*
 * 转换数组
 */
function TransferWeek() {
    // 每周数据
    var weekData = {};
    // 整个数据的第一天是周几
    var startweek;
    // 当前索引
    var idx = 1;
    // 当前循环到周几
    var weekidx = 0;
    // 本周的数据
    var curweekdata = [];
    // 每周第一天的日期
    var firstday;
    for (day in chartData) {
        if (idx == 1) {
            startweek = new Date(day).getDay();
            weekidx = startweek;
            firstday = day;
        }
        if(weekidx==0)
        {
        }
        curweekdata.push(chartData[day]);
        idx++;
        if (weekidx >= 7) {
            weekData[firstday + " ---> " + day] = arrayAverage(curweekdata);
            curweekdata.length = 0;
            console.log(curweekdata);
            weekidx = 0;
            firstday = day;
        } else {
            weekidx++;
        }
    }
    return weekData;
}

/**
 * 求数组的平均值
 */
function arrayAverage(arr) {
    var count = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        count += arr[i];
    }
    return count / len;
}

/**
 * 根据每周的数据显示表格
 */
function randerChartByWeek(showData) {
    var rectWidth = getShowWidth();
    var rectHeight = 0;
    var viewChart = document.getElementById("aqi-chart-view");
    viewChart.innerHTML = "";
    var viewStr = "";
    var idx = 1;
    for (day in showData) {
        var value = showData[day];
        var div = document.createElement("div");
        div.style.width = rectWidth + "px";
        div.style.height = showData[day] + "px";
        div.style.position = "absolute";
        div.style.left = (idx * rectWidth) + "px";
        div.style.bottom = "0px";
        div.title = day;
        //console.log(div);
        div.style.backgroundColor = getColorByValue(showData[day]);
        viewChart.appendChild(div);
        idx++;
    }
    viewChart.style.width = (rectWidth * ++idx) + "px";
    //console.log(viewChart);
}


/**
 * 根据每日的数据显示表格
 */
function randerChartByDay() {
    var rectWidth = getShowWidth();
    var rectHeight = 0;
    var viewChart = document.getElementById("aqi-chart-view");
    viewChart.innerHTML = "";
    var viewStr = "";
    var idx = 1;
    for (day in chartData) {
        var value = chartData[day];
        var div = document.createElement("div");
        div.style.width = rectWidth + "px";
        div.style.height = chartData[day] + "px";
        div.style.position = "absolute";
        div.style.left = (idx * rectWidth) + "px";
        div.style.bottom = "0px";
        div.title = day;
        //console.log(div);
        div.style.backgroundColor = getColorByValue(chartData[day]);
        viewChart.appendChild(div);
        idx++;
    }
    viewChart.style.width = (rectWidth * ++idx) + "px";
    //console.log(viewChart);
}

/**
 * 根据年月日返回宽度
 */
function getShowWidth() {
    switch (pageState.nowGraTime) {
        case "mouth":
            return 50;
        case "week":
            return 30;
        case "day":
            return 10;
        default:
            return 10;
    }
}

/**
 * 根据数值返回颜色
 */
function getColorByValue(value) {
    if (value >= 400)
        return "black";
    if (value >= 300)
        return "red";
    if (value >= 200)
        return "purple";
    if (value >= 100)
        return "blue";

    return "green";
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(argument) {
    // 确定是否选项发生了变化 
    if (pageState.nowGraTime == argument.target.value) {
        return;
    }
    //console.log("--------time start---------");
    //console.log(argument);
    //console.log(pageState.nowGraTime);
    //console.log(argument.target.value);
    //console.log("--------time end---------");
    // 设置对应数据
    pageState.nowGraTime = argument.target.value;
    //console.log(pageState.nowGraTime);
    initAqiChartData();
    // 调用图表渲染函数
    renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(argument) {
    // 确定是否选项发生了变化 
    if (pageState.nowSelectCity == argument.target.value) {
        return;
    }
    // 设置对应数据
    pageState.nowSelectCity = argument.target.value
    initAqiChartData();
    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    //var field = document.getElementById("form-gra-time");
    //console.log(field);
    var inputs = document.getElementsByTagName("input");
    //console.log(inputs.length);
    for (var i = 0; i < inputs.length; i++) {
        //console.log(inputs[i]);
        inputs[i].onclick = graTimeChange;
    }
    //console.log(inputs);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var citys = "";
    for (city in aqiSourceData) {
        citys += "<option value=\"" + city + "\">" + city + "</option>";
    }
    var select = document.getElementById("city-select");
    select.innerHTML = citys;
    select.selectedIndex = 0;
    pageState.nowSelectCity = select.value;
    //console.log(select);
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    select.onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    //console.log(pageState.nowSelectCity);
    chartData = aqiSourceData[pageState.nowSelectCity];
    //console.log(chartData);
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
    renderChart();
}

window.onload = function() {
    init();
}
