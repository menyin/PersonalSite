/**
 * Created by CNY on 2016/11/5.
 */
define(function (require, exports, module) {
    module.exports=MagnifierHander;
    function MagnifierHander() {
        this.magnifierHander= $('.magnifier_hander');
    }
    function init() {
        //放大效果初始化
        this.magnifierHander.mouseover(function () {
            
        })
    }
    MagnifierHander.prototype.handerUp= function () {
        this.magnifierHander.css({
            'transition':'0.1s',
            'transform':'rotate(-40deg)',
            '-webkit-transform':'rotateZ(-40deg)'
        });
    };
    MagnifierHander.prototype.handerDown= function () {
        this.magnifierHander.css({
            'transition':'0.4s',
            'transform':'rotate(0deg)',
            '-webkit-transform':'rotateZ(0deg)'
        });
    }
});