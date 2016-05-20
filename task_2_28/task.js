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
        return { h: this.top - 300 + h, v: this.left - v, ang: angle };
    }
}

// 飞船类
var spaceShip = {
    createNew: function () {
        var spaceship = {};
        spaceship.id = 0;
        spaceship.name = "";
        spaceship.curenergy = 100;  // 当前能量
        spaceship.energy;    // 能量系统
        spaceship.power;    // 动力系统
        spaceship.track = 200; // 轨道

        // 运行状态 false 停止 true 运行
        spaceship.state = false;
        spaceship.top = 0;    // 位置
        spaceship.left = 0;    // 位置
        spaceship.rotate = 0;    //旋转角度
        spaceship.second = 0;    //运行时间

        // 创建飞船标签并且初始化属性样式
        spaceship.tag;

        // 广播消息
        spaceship.RadioMsg = function (bmsg) {
            //
        }

        // 接收消息
        spaceship.ReceiveMag = function () {
            //
        }
        spaceship.Create = function () {
            spaceship.ptag = document.getElementById("tagspace");
            spaceship.tag = document.createElement("div");
            spaceship.tag.setAttribute("class", "spaceship")
            spaceship.tag.style.top = "35px";
            spaceship.tag.style.left = "270px";
            spaceship.ptag.appendChild(spaceship.tag);
            setInterval(spaceship.run, 1000);
        }
        spaceship.start = function () {
            spaceship.state = true;
        }
        // 前进
        spaceship.run = function () {
            //
            console.log('normal');
            // 能量恢复
            if (spaceship.curenergy < 100)
                spaceship.curenergy += spaceship.energy.recover;

            if (!spaceship.state)  // 是否处于飞行状态
                return;
            if (spaceship.power.consume <= spaceship.curenergy) {
                spaceship.curenergy -= spaceship.power.consume;  // 消耗能量
                spaceship.second++;    // 飞行时间
            } else {
                spaceship.stop();  //能量不足停止飞行
                return;
            }

            var result = centerPoint.calaulate(spaceship.track, spaceship.power.speed, spaceship.second);  // 计算当前位置
            console.log(result);
            spaceship.left = result.v;
            spaceship.top = result.h;
            spaceship.rotate = result.ang;
            spaceship.render();
        }

        // 停止
        spaceship.stop = function () {
            //
            spaceship.state = false;
        }

        // 销毁
        spaceship.destory = function () {
            delete spaceship;
        }

        // 渲染位置和文字以及其他样式
        spaceship.render = function () {
            //
            spaceship.tag.style.top = spaceship.top;
            spaceship.tag.style.left = spaceship.left;
            spaceship.tag.style.transform = 'rotate(' + spaceship.rotate + 'deg)';
            spaceship.tag.innerText = spaceship.name;
        }
        return spaceship;
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

    s1 = new spaceShip.createNew();
    s1.id = 1;
    s1.name = '三体号';
    s1.power = power.GetType(2); // 动力系统
    s1.energy = energy.GetType(2);    // 能量系统
    s1.track = 200; // 轨道
    s1.Create();
}