/**
 * Created by CNY on 2016/11/9.
 */
define(function (require, exports, module) {
    module.exports=Index;
    function Index() {}

    var Magnifier = require('./Magnifier');
    var Scene3d = require('./Scene3d');
    var Wirefont = require('./Wirefont');
    var Projects = require('./Projects');
    var Tip= require('./Tip');
    var magnifier = new Magnifier();
    var scene3d = new Scene3d();
    var wirefont = new Wirefont();
    var projects = new Projects();
    var tip= new Tip();
    Index.in= function () {
        setTimeout(function () {
            //3D转盘进入
            scene3d.start();
            //作品项目轮播图进入
            projects.start();
        }, 1000);
        setTimeout(function () {
            //放大镜进入
            magnifier.start();
            //技术博客琴弦文字进入
            wirefont.start();
        }, 2000);
        setTimeout(function () {
            tip.start();
        }, 3000);
    };
    Index.out= function () {
        scene3d.out();
        projects.out();
        magnifier.out();
        wirefont.out();
        tip.out();
    };

});