/**
 * Created by CNY on 2016/11/9.
 */
define(function (require,exports,module) {
    module.exports=Tip;
    function Tip() {
        this.tip = $('.tip');
    }
    Tip.prototype.start= function () {
        this.tip.animate({'bottom':94,'opacity':1},800,'swing');
    };
    Tip.prototype.out= function () {
        this.tip.animate({'bottom':-500,'opacity':0},200,'swing');
    };
});