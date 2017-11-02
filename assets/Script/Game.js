cc.Class({
    extends: cc.Component,

    properties: {
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
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
    },
});
