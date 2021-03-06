// 静态对象 能源系统模型
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

// 静态对象 飞行系统模型
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
var Adapter = {
    createNew: function () {
        var adapter = {};
        adapter.Encode = function (ship) {
            var code = "";
            var bid = parseInt(ship.id, 2);
            if (bid.toString().length <= 4) {
                //console.log((10000 + bid).toString());
                code += (10000 + bid).toString().substr(1, 4);
            } else {
                code += bid.toString().substr(1, 4);
            }
            if (ship.state == "停止") {
                code += "0010";
            }
            else if (ship.state == "飞行") {
                code += "0001";
            }
            else {
                code += "1100";
            }
            var e = parseInt(ship.energy, 2);
            if (e.toString().length < 8) {
                code += (100000000 + e).toString().substr(1, 8);
            } else { code += "00000000" }
            return code;
        };
        adapter.Decode = function (code) {
            var ship = {};
            ship.id = parseInt(code.substr(0, 4), 10);
            var s = code.substr(4, 4);
            if (s == "0010") {
                ship.state = "停止";
            } else if (s == "0001") {
                ship.state = "飞行";
            } else {
                ship.state = "销毁";
            }
            ship.energy = parseInt(code.substr(8, 8), 10);
            return ship;
        };
        // 检测是否丢包
        adapter.Check = function (code) {
            if (code != null && code.length == 16)
                return true;
            else
                return false;
        }
        return adapter;
    }

}

// 星球中心的位置
var centerPoint = {
    left: 300,
    top: 300,
    // 传入半径和弧长（速度）计算每秒的横纵运行距离
    calaulate: function (r, l, sec) {
        // 角度
        // var angle = l * sec * 180 / Math.PI / r;
        // var h = r * Math.sin(angle / 2) * 2 * Math.sin(angle / 2);
        // var v = r * Math.sin(angle / 2) * 2 * Math.cos(angle / 2);
        // return { h: this.top - 300 + h, v: this.left - v, ang: angle };
        var angle = Math.PI / 2 - l * sec / r / 2; // 顶角弧度
        var chord = r * Math.cos(angle) * 2; // 弦
        var v = chord * Math.sin(angle);
        var h = chord * Math.cos(angle);
        var tangle = 90 - 180 * angle / Math.PI;
        return { h: this.top - r - 10 + h, v: this.left - 40 - v, ang: -tangle * 2 };
    }
}

// 行星信号广播器 广播接受行星的消息并处理后广播到宇宙中
var Mediator = {
    // 当前状态，是否正在处理消息 True -> 是 | False -> 否
    State: false,
    // 消息错误次数
    ErrorNum: 0,
    // 要处理的消息队列
    MsgQueue: [],
    // 向队列的尾部添加一条消息
    PushMsg: function (msg) {
        this.MsgQueue.push(msg);
    },
    // 处理消息队列
    DealMsgQueue: function () {
        //
        console.log("DealMsgQueue");
        this.ErrorNum = 0;
        if (this.MsgQueue.length > 0)
            this.RadioMsg(this.MsgQueue[0]);
        else
            setTimeout("Mediator.DealMsgQueue()", 1000);
    },
    // 广播消息
    RadioMsg: function (msg) {
        // 模拟丢包
        msg = this.SimulateLosePockage(msg);
        for (var i = 0; i < Planet.ships.length; i++) {
            if (Planet.ships[i] != undefined && Planet.ships[i] != null) {
                Planet.ships[i].ReceiveMag(msg);
            }
        }
    },
    //
    MsgReplyed: function (msg) {
        //
        if (msg == "LP") {
            //
            if (this.ErrorNum <= 0) {
                //
                this.ErrorNum++;
                setTimeout("Mediator.DealMsgQueue()", 300);
                //this.DealMsgQueue();
                console.log("接收到消息，300ms后重新广播。。。");
            } else {
                setTimeout("Mediator.DealMsgQueue()", 300);
                console.log("已经接收到消息，正在准备重新广播。。。");
            }
        }
        if (msg == "OK") {
            //
            //if (this.State) {
            //
            var m = this.MsgQueue.shift();
            m = null;
            delete m;
            setTimeout("Mediator.DealMsgQueue()", 300);
            console.log("消息广播成功，发送下一条。。。");
            //this.DealMsgQueue();
            //}else{
            //    console.log("消息广播成功。。。");
            //}
        }
    },
    // 模拟丢包
    SimulateLosePockage: function (msg) {
        //
        var nmsg = "";
        for (var i = 0; i < msg.length; i++) {
            if (Math.random() > 0.01) {
                nmsg += msg[i];
            }
        }
        return nmsg;
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
        spaceship.track = 250; // 轨道

        // 运行状态 false 停止 true 运行
        spaceship.state = false;
        spaceship.top = 0;    // 位置
        spaceship.left = 0;    // 位置
        spaceship.rotate = 0;    //旋转角度
        spaceship.second = 0;    //运行时间

        // 创建飞船标签并且初始化属性样式
        spaceship.tag;

        // 消息转换器
        spaceship.adapter;

        // 定时执行的对象
        spaceship.interval;

        // 广播消息
        spaceship.RadioMsg = function (bmsg) {
            //
        }

        // 接收消息
        spaceship.ReceiveMag = function (msg) {
            //
            if (spaceship.adapter.Check(msg)) {
                var ship = spaceship.adapter.Decode(msg);
                if (ship.id == spaceship.id) {
                    //
                    if (ship.state == "飞行") {
                        if (!spaceship.state)
                        { spaceship.state = true }
                        //
                    } else if (ship.state == "停止") {
                        //
                        if (spaceship.state)
                        { spaceship.state = false }
                    } else if (ship.state == "销毁") {
                        //
                        Mediator.MsgReplyed("OK");
                        spaceship.destory();
                    }
                    Mediator.MsgReplyed("OK");
                }
            } else {
                Mediator.MsgReplyed("LP");
            }
        }
        // 创建
        spaceship.Create = function () {
            spaceship.ptag = document.getElementById("tagspace");
            spaceship.tag = document.createElement("div");
            spaceship.tag.setAttribute("class", "spaceship")
            spaceship.tag.id = "ship" + spaceship.id;
            spaceship.tag.style.top = "35px";
            spaceship.tag.style.left = "270px";
            spaceship.ptag.appendChild(spaceship.tag);
            spaceship.adapter = new Adapter.createNew();

            spaceship.interval = setInterval(spaceship.run, 1000);
        }
        // 前进的主方法
        spaceship.start = function () {
            spaceship.state = true;
        }
        // 前进
        spaceship.run = function () {
            //
            //console.log('normal');
            // 能量恢复
            if (spaceship.curenergy < 100)
                spaceship.curenergy += spaceship.energy.recover;

            if (!spaceship.state)  // 是否处于飞行状态
            {
                spaceship.render();
                return;
            }
            if (spaceship.power.consume <= spaceship.curenergy) {
                spaceship.curenergy -= spaceship.power.consume;  // 消耗能量
                spaceship.second++;    // 飞行时间
            } else {
                spaceship.stop();  //能量不足停止飞行
                return;
            }

            var result = centerPoint.calaulate(spaceship.track, spaceship.power.speed, spaceship.second);  // 计算当前位置
            //console.log(result);
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
            var parent = document.getElementById("tagspace");
            var child = document.getElementById(spaceship.tag.id);
            parent.removeChild(child);
            clearInterval(spaceship.interval);
            // var tag = document.getElementById(spaceship.tag.id);
            // document.body.removeChild(tag);
            spaceship = null;
            var a = {};
            a.a = spaceship;
            delete a.a;
            delete spaceship;
        }

        // 渲染位置和文字以及其他样式
        spaceship.render = function () {
            //
            spaceship.tag.style.top = spaceship.top;
            spaceship.tag.style.left = spaceship.left;
            spaceship.tag.style.transform = 'rotate(' + spaceship.rotate + 'deg)';

            // spaceship.tag.style.msTransform = 'rotate(' + spaceship.rotate + 'deg)';
            // spaceship.tag.style.webkitTransform = 'rotate(' + spaceship.rotate + 'deg)';
            spaceship.tag.style.webkitTransform = "rotate(" + spaceship.rotate + "deg)";
            spaceship.tag.style.msTransform = "rotate(" + spaceship.rotate + "deg)";
            spaceship.tag.style.MozTransform = "rotate(" + spaceship.rotate + "deg)";
            spaceship.tag.style.OTransform = "rotate(" + spaceship.rotate + "deg)";
            spaceship.tag.style.transform = "rotate(" + spaceship.rotate + "deg)";
            //var s1 = ' -ms-transform : rotate(' + spaceship.rotate + 'deg);'; /* IE 9 */
            //s1 += ' -webkit-transform : rotate(' + spaceship.rotate + 'deg);'; /* Safari and Chrome */
            //var s2 = spaceship.tag.style.cssText;
            //spaceship.tag.style.cssText = (s2+s1);
            spaceship.tag.innerText = spaceship.name + "(" + spaceship.curenergy + ")";
        }
        return spaceship;
    }
}

// 飞船工厂
var shipFactory = {
    count: 0,
    curId: 0,
    // id，名称，动力系统，能量系统，轨道
    createShip: function (id, name, pow, eng, trk) {
        //
        var s1 = new spaceShip.createNew();
        s1.id = id;
        s1.name = (name == "" || name == null) ? (id + '号') : name;
        s1.power = power.GetType(pow); // 动力系统
        s1.energy = energy.GetType(eng);    // 能量系统
        s1.track = trk; // 轨道
        s1.top = (300 - s1.track - 10)
        s1.left = 260;
        s1.Create();
        s1.render();
        return s1;
    },
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

// 行星对象
var Planet = {
    // 
    ships: [],
    adapter: new Adapter.createNew(),
    getShipById: function (id) {
        for (var i = 0; i < this.ships.length; i++) {
            if (this.ships[i] != undefined && this.ships[i] != null && this.ships[i].id == id) {
                return this.ships[i];
            }
        }
        return null;
    },
    shipDestory: function (id) {
        //
        var idx = -1;
        for (var i = 0; i < this.ships.length; i++) {
            if (this.ships[i] != undefined && this.ships[i] != null && this.ships[i].id == id) {
                idx = i;
            }
        }
        if (idx == -1) {
            console.log("没有要销毁的飞船" + id);
            //
        } else {
            //
            this.ships[idx].destory();
            this.ships[idx] = null;
            delete this.ships[idx];
            console.log("成功销毁飞船" + id);
        }
    },
    shipEvent: function (id, type) {
        //
        var ship = this.getShipById(id);
        if (type == "create") {
            //
            /* 
            */
            if (ship != null) {
                console.log("飞船已经存在！");
                return;
            }
            var pow = 1;
            var eng = 1;
            if (id == 2) {
                pow = 2;
                eng = 2;
            } else if (id == 3) {
                pow = 2;
                eng = 3;
            } else if (id == 4) {
                pow = 3;
                eng = 3;
            }
            var trk = 50 * (id + 1);
            this.ships.push(shipFactory.createShip(id, "", pow, eng, trk));
            console.log(this.ships);
            return;
        }

        if (id == null || ship == null) {
            console.log("没有此飞船！" + id);
            return;
        }
        if (type == "start") {
            //
            //var transfer = new Adapter.createNew();
            var order = this.adapter.Encode(this.CombineOrder(id, type));
            Mediator.PushMsg(order);
            //ship.start();
        } else if (type == "stop") {
            //
            var order = this.adapter.Encode(this.CombineOrder(id, type));
            Mediator.PushMsg(order);
            //ship.stop();
        } else if (type == "destory") {
            //
            var order = this.adapter.Encode(this.CombineOrder(id, type));
            Mediator.PushMsg(order);
            //this.shipDestory(id);
        }
    },
    CombineOrder: function (id, type) {
        // 
        var ship = {};
        ship.id = id;
        if (type == "stop") {
            ship.state = "停止";
        } else if (type == "start") {
            ship.state = "飞行";
        } else {
            ship.state = "销毁";
        }
        ship.energy = 0;
        return ship;
    }
}

window.onload = function () {
    //
    //spaceships = [];
    BindAToSelectRadio();  // 绑定按钮
    Mediator.DealMsgQueue();
    //console.log(power.GetType(1));
    /* 
        s1 = new spaceShip.createNew();
        s1.id = 1;
        s1.name = '三体号';
        s1.power = power.GetType(2); // 动力系统
        s1.energy = energy.GetType(2);    // 能量系统
        s1.track = 200; // 轨道
        s1.top = (300 - s1.track - 10)
        s1.left = 260;
        s1.Create();
        s1.render();
        */
}