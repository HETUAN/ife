// 静态对象
var energy = {
    energyType: [{
        id: 1,
        name: "劲量型",
        recover: 2
    }, {
            id: 2,
            name: "光能型",
            recover: 3
        }, {
            id: 3,
            name: "永久型",
            recover: 4
        }],
    GetType: function (id) {
        for (var i = 0; i < this.energyType.length; i++) {
            if (this.energyType[i].id == id) {
                return this.energyType[i];
            }
        }
        return null;
    }
}

// 静态对象
var power = {
    powerType: [{
        id: 1,
        name: "前进号",
        speed: 30,
        consume: 5
    }, {
            id: 2,
            name: "奔腾号",
            speed: 50,
            consume: 7
        }, {
            id: 3,
            name: "超越号",
            speed: 80,
            consume: 9
        }],
    GetType: function (id) {
        for (var i = 0; i < this.powerType.length; i++) {
            if (this.powerType[i].id == id) {
                return this.powerType[i];
            }
        }
        return null;
    }
}

//在包含 radio 标签的 a 标签上绑定点击事件
var BindAToSelectRadio = function () {
    var radios = document.getElementsByClassName("radio");
    console.log(radios);
    for (var idx = 0; idx < radios.length; idx++) {
        radios[idx].onclick = function (e) {
            e.target.firstElementChild.checked = "checked";
        }
    }
}

var energyModel = function () {
    this.id = 0;
    this.name = "";
    this.recover = 0;
}

var powerModel = function () {
    this.id = 0;
    this.name = "";
    this.speed = 0;
    this.comsume = 0;
}

// 行星接受器（接受飞船的反馈信息）
var Adapter = function () {
    //
}

// 广播接受行星的消息并处理后广播到宇宙中
var Mediator = function () {
    //

}

// 星球中心的位置
var centerPoint = {
    left: 300,
    top: 300,
    // 传入半径和弧长（速度）计算每秒的横纵运行距离
    calaulate: function (r, l, sec) {
        // 角度
        var angle = l * sec * 180 / Math.PI / r;
        var h = r * Math.sin(angle / 2) * 2 * Math.sin(angle / 2);
        var v = r * Math.sin(angle / 2) * 2 * Math.cos(angle / 2);
        return { h: top - 300 + h, v: left - v, ang: angle };
    }
}

// 飞船类
var spaceShip = function () {
    this.id = 0;
    this.name = "";
    this.curenergy = 100;  // 当前能量
    this.energy;    // 能量系统
    this.power;    // 动力系统
    this.track = 200; // 轨道

    // 运行状态 false 停止 true 运行
    this.state = false;
    this.top = 0;    // 位置
    this.left = 0;    // 位置
    this.rotate = 0;    //旋转角度
    this.second = 0;    //运行时间

    // 创建飞船标签并且初始化属性样式
    this.tag;

    // 广播消息
    this.RadioMsg = function (bmsg) {
        //
    }

    // 接收消息
    this.ReceiveMag = function () {
        //
    }
    this.Init = function () {
        this.ptag = document.getElementById("tagspace");
        this.tag = document.createElement("div");
        this.tag.setAttribute("class", "spaceship")
        this.tag.style.top = "35px";
        this.tag.style.left = "270px";
        this.ptag.appendChild(this.tag);
        setInterval(this.run, 1000);
    }
    this.start = function () {
        this.state = true;
    }
    // 前进
    this.run = function () {
        //
        console.log('normal');
        // 能量恢复
        if (curenergy < 100)
            curenergy += energy.recover;

        if (!state)  // 是否处于飞行状态
            return;
        if (power.comsume > curenergy) {
            curenergy -= power.comsume;  // 消耗能量
            second++;    // 飞行时间
        } else {
            stop();  //能量不足停止飞行
            return;
        }

        var result = centerPoint.calaulate(track, power.speed, second);  // 计算当前位置
        console.log(result);
        this.left = result.v;
        this.top = result.h;
        this.rotate = result.ang;
        this.render();
    }

    // 停止
    this.stop = function () {
        //
        this.state = false;
    }

    // 销毁
    this.destory = function () {
        delete this;
    }

    // 渲染位置和文字以及其他样式
    this.render = function () {
        //
        this.tag.style.top = this.top;
        this.tag.style.left = this.left;
        this.tag.style.transform = 'rotate(' + this.rotate + 'deg)';
        this.tag.innerText = this.name;
    }
}

// 飞船工厂
var shipFactory = {
    count: 0,
    curId: 0,
    createShip: function () { },
}

window.onload = function () {
    //
    //spaceships = [];
    //BindAToSelectRadio();
    //console.log(power.GetType(1));

    s1 = new spaceShip();
    s1.id = 1;
    s1.name = '三体号';
    s1.power = power.GetType(2); // 动力系统
    s1.energy = energy.GetType(2);    // 能量系统
    s1.track = 200; // 轨道
    s1.Init();
}