/**
 * Created by CNY on 2016/11/2.
 */
define(function (require, exports, module) {
    module.exports = Menu;
    function Menu(aMenuData) {
        if (aMenuData) {
            this.aMenu = aMenuData;
            //向.menu元素里添加a元素
        }
        //菜单项hover在css里定义
    }

    Menu.prototype.start = function(endCallback) {
        $('.menu a').size();

    };
});