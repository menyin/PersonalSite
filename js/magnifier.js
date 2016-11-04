/**
 * Created by CNY on 2016/11/4.
 */
define(function (require, exports, module) {
    var SlideImg = require('./SlideImg');
    module.exports = Magnifier;
    function Magnifier() {
    }
    Magnifier.init=function () {
        var a$Li1 = $('.slideimg_box_one li');
        var slideImg1=new SlideImg(a$Li1,[{top:0,left:0},{top:0,left:460},{top:-120,left:460},{top:-120,left:0}],1000);
        $('.slideimg_prevent').click(function () {
            slideImg1.prevent();
        });
        $('.slideimg_next').click(function () {
            slideImg1.next();
        });
    };
});
