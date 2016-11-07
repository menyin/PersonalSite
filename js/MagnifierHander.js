/**
 * Created by CNY on 2016/11/5.
 */
define(function (require, exports, module) {
    module.exports = MagnifierHander;
    function MagnifierHander() {
        this.magnifierHander = $('.magnifier_hander');
        this.init();
    }

    MagnifierHander.prototype.init=function() {
        var _this=this;
        //放大效果初始化
        var zoom = $('.zoom');
        var iBackLeft =this.magnifierHander.css('left');
        var oXoomFont = $('.magnifier_hander .circle h2');
        zoom.mousemove(function (e) {
            var iX=e.pageX-zoom.offset().left;
            var iScale=66/50;
            if (iX>zoom.offset().left&&iX<zoom.offset().left+zoom.width()) {
                $('.magnifier_hander').stop().animate({'left':iX-98},10,'swing');
                oXoomFont.animate({'left':-(iX - 60) * iScale},10,'swing');
            }
        });

        zoom.mouseleave(function () {
            _this.magnifierHander.animate({'left':iBackLeft},200,'swing');
            oXoomFont.animate({'left':0},10,'swing');
        });
    }

    MagnifierHander.prototype.handerUp = function () {
        this.magnifierHander.css({
            'transition': '0.1s',
            'transform': 'rotate(-40deg)',
            '-webkit-transform': 'rotateZ(-40deg)'
        });
        this.magnifierHander.find('.circle h2').html('');
    };
    MagnifierHander.prototype.handerDown = function () {
        this.magnifierHander.css({
            'transition': '0.4s',
            'transform': 'rotate(0deg)',
            '-webkit-transform': 'rotateZ(0deg)'
        });
        var _this=this;
        setTimeout(function () {
            var currTxt=$('.slideimg_box_one li.active').html();
            _this.magnifierHander.find('.circle h2').html(currTxt);
        }, 200);

    }
    MagnifierHander.prototype.handerClearTxt= function () {
    };
    var whichTransitionEvent = (function (){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition'       :'transitionEnd',
            'OTransition'      :'oTransitionEnd',
            'MSTransition'     :'msTransitionEnd',
            'MozTransition'    :'transitionend',
            'WebkitTransition' :'webkitTransitionEnd'
        }

        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    } ());


});