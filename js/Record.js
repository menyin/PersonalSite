/**
 * Created by CNY on 2016/11/16.
 */
define(function (require, exports, module) {
    module.exports = Record;
    function Record() {
    }

    Record.init = function () {
        var Switch3d = require('./Switch3d');
        var oList = document.getElementById("list");
        var oBtns = document.getElementById("switch3d_bts");
        this.switch3d = switch3d = new Switch3d(oList, oBtns);
    };
    Record.init();
    Record.in = function (endCallback) {
        $('.switch3d_wrap').animate({top: 160}, 1200, 'swing', function () {
            $('.switch3d_bts').animate({left: 0}, 800, 'elasticOut', function () {
                if (endCallback) {
                    endCallback();
                }
            });
        });
    };
    Record.out = function (endCallback) {
        $('.switch3d_bts').animate({top:-200}, 800, 'swing');
        $('.switch3d_wrap').animate({top: -1000}, 800, 'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
});
