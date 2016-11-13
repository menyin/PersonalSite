/**
 * Created by CNY on 2016/11/8.
 */
define(function (require, exports, module) {
    module.exports = Skill;
    function Skill() {
    }
    Skill.init = function () {
        var Cloud3d = require('./Cloud3d');
        var aLiBt = $('.cloud3d .bts li');
        var _this=this;


        //圆球初始化
        var oUlBall = document.getElementById('ball');
        var sTxtBall = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉JQueryZeptoBootstrapNodeJsEasyUI使用了解AngularJs';
        this.ball=new Cloud3d.Ball(oUlBall,sTxtBall);
        aLiBt.eq(0).click(function () {
            _this.ball.out();
        });
        //圆锥初始化
        var oUlCone = document.getElementById('cone');
        var sTxtCone = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉使用了解AngularJs';
        this.cone=new Cloud3d.Cone(oUlCone,sTxtCone);
        aLiBt.eq(1).click(function () {
            _this.cone.out();
        });
        //圆柱初始化
        var oUlCylinder = document.getElementById('cylinder');
        var sTxtCylinder = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉常用js框架使用了解AngularJs了解HTML 5新标签的语义';
        this.cylinder=new Cloud3d.Cylinder(oUlCylinder,sTxtCylinder);
        aLiBt.eq(2).click(function () {
            _this.cylinder.out();
        });


    };
    Skill.init();
    Skill.in= function (endCallback) {
        var _this=this;
        $('.cloud3d').animate({top: 140},800,'swing', function () {
            //_this.ball.in();
            //_this.cone.in();
            _this.cylinder.in();
        });
    };
    Skill.out= function (endCallback) {
        $('.cloud3d').animate({top: -500},800,'swing');
    };

});