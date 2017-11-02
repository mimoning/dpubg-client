cc.Class({
    extends: cc.Component,


    properties: {
        // defaults, set visually when attaching this script to the Canvas
        // 移动速度
        moveSpeed: 0,
    },

    setInputControl: function () {
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否是我们指定的方向控制键，并设置向对应方向加速
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.w:
                        self.accTop = true;
                        self.accBottom = false;
                        break;
                    case cc.KEY.s:
                        self.accTop = false;
                        self.accBottom = true;
                        break;
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                }
            },
            // 松开按键时，停止向该方向的加速
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.w:
                        self.accTop = false;
                        break;
                    case cc.KEY.s:
                        self.accBottom = false;
                        break;
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },

    // use this for initialization
    onLoad: function () {
        // 移动方向开关
        this.accTop = false;
        this.accBottom = false;
        this.accLeft = false;
        this.accRight = false;

        // 监听按键控制 player 移动
        this.setInputControl();
    },

    // called every frame
    update: function (dt) {
        // 根据当前速度更新主角的位置
        var xSpeed = 0, ySpeed = 0;
        // 垂直方向速度
        if (this.accTop) {
            ySpeed = this.moveSpeed;
        } else if (this.accBottom) {
            ySpeed = -this.moveSpeed;
        }
        // 水平方向速度
        if (this.accLeft) {
            xSpeed = -this.moveSpeed;
        } else if (this.accRight) {
            xSpeed = this.moveSpeed;
        }

        this.node.x += xSpeed;
        this.node.y += ySpeed;

        console.log(this.node.x, this.node.y)
    },
});
