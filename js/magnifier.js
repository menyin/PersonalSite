/**
 * Created by CNY on 2016/11/4.
 */
define(function (require, exports, module) {
    var SlideImg = require('./SlideImg');
    var MagnifierHander = require('./MagnifierHander');
    module.exports = Magnifier;
    function Magnifier(endCallback) {
        this.magnifier = $('.magnifier');
        this.init();
        if (endCallback) {
            endCallback();
        }
    }
    Magnifier.prototype.start=function(endCallback) {
        this.magnifier.css('top',100).animate({'top':210,'opacity':1},800,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
    Magnifier.prototype.out=function(endCallback) {
        this.magnifier.animate({'top':100,'opacity':0},200,'swing', function () {
            $(this).css('top', -400);
            if (endCallback) {
                endCallback();
            }
        });
    };
    Magnifier.prototype.init=function () {
        var a$Li1 = $('.slideimg_box_one li');
        var slideImg1=new SlideImg(a$Li1,[{top:0,left:0,opacity:1,active:true},{top:0,left:460,opacity:0},{top:-120,left:460,opacity:0},{top:-120,left:0,opacity:0}],200);
        var a$Li2 = $('.slideimg_box_two li');
        var slideImg2=new SlideImg(a$Li2,[{top:0,left:0,opacity:1,active:true},{top:58,left:0,opacity:0},{top:58,left:460,opacity:0},{top:0,left:460,opacity:0}],20);
        var magnifierHander = new MagnifierHander();
        //前进后退按钮事件
        $('.lightbox_bt1').mousedown(function () {
            $(this).css('backgroundPosition','-60px center')
        }).mouseup(function () {
            magnifierHander.handerUp ();
            slideImg1.prevent(function () {
                magnifierHander.handerDown();
                slideImg2.prevent();
            });
            $(this).css('backgroundPosition','0 center')
        });
        $('.lightbox_bt2').mousedown(function () {
            $(this).css('backgroundPosition','-90px center')
        }).mouseup(function () {
            magnifierHander.handerUp ();
            slideImg1.next(function () {
                magnifierHander.handerDown();
                slideImg2.next();
            });
            $(this).css('backgroundPosition','-30px center')
        });
    };
});
