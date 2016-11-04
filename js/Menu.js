/**
 * Created by CNY on 2016/11/2.
 */
define(function (require, exports, module) {
    module.exports = Menu;
    function Menu(aMenuData) {
        if (aMenuData) {
            this.aMenu = aMenuData;
            //向.menu元素里添加a元素,忽略不写
        }
        //菜单项hover在css里定义
    }

    function toPosition() {

    }
    Menu.prototype.start = function (endCallback) {
        //$('.menu').addClass('slideInUp');
        var aA=$('.menu a');
        aA.each(function (i) {
            var _This=this;
            setTimeout(function () {
                $(_This).animate({'marginTop':0,'opacity':1},800,'swing', function () {
                    if (i==aA.size()&&endCallback) {
                        endCallback();
                    }
                });
          },i*300);
        });
    };

});