/**
 * Created by CNY on 2016/11/1.
 */
define(function (require,exports,module) {
    function init() {
        //$(window).load(function () {
        //    resizeSet();
        //});
        //$(window).resize(function () {
        //    resizeSet();
        //});
    }
    function resizeSet() {
        var iMinW=1000;
        var iWindowW = $(window).width();
        var width=iMinW>iWindowW?iMinW:iWindowW
        $('body').width(width);
        document.title=$('body').width()+'----'+iWindowW
    }
    exports.init=init;
});