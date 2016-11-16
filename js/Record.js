/**
 * Created by CNY on 2016/11/16.
 */
define(function (require, exports, module) {
    module.exports=Record;
    function Record() {
    }
    Record.init=function() {
        var Switch3d = require('./Switch3d');
        this.switch3d= switch3d = new Switch3d();
    };
    Record.init();
    Record.prototype.in= function (endCallback) {
        $('.switch3d_wrap').animate({top:0},800,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
    Record.prototype.out= function (endCallback) {
        $('.switch3d_wrap').animate({top:-1000},800,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
});
