/**
 * Created by CNY on 2016/11/1.
 */
define(function (require, exports, module) {
    module.exports = Loading;//面向对象必须用 module.exports而不是直接用exports
    function Loading(aImgSrc) {
        this.aImg = ['http://pic31.nipic.com/20130719/5252423_201432520000_2.jpg',
            'http://pic87.huitu.com/res/20160929/554342_20160929155535330010_1.jpg',
            'http://pic31.nipic.com/20130717/5252423_124607284000_2.jpg',
            'http://pic1.nipic.com/2009-03-06/2009369438164_2.jpg',
            'http://img13.poco.cn/mypoco/myphoto/20120715/02/65940800201207150254252991122436108_011.jpg'];
        if (aImgSrc) {
            this.aImg = aImgSrc;
        }
    }

    Loading.prototype.start = start;
    function start(endCallback) {
        var num = 0;
        var aImg = this.aImg;
        $('.loading').fadeIn(500, 'linear', function () {
            for (var i = 0; i < aImg.length; i++) {
                var oImg = new Image();
                oImg.src = aImg[i];
                oImg.onload = function () {
                    num++;
                    $('.load_img4').html(num * 100 / aImg.length + '%');
                    if (num == aImg.length) {
                        //$('.load_img2').css('animation-play-state','paused');
                        //$('.load_img2').css('-webkit-animation-play-state','paused');
                        $('.load_img2,.load_img3').css({
                            'animation-play-state': 'paused',
                            '-webkit-animation-play-state': 'paused'
                        })
                        $('.loading').fadeOut();
                        if (endCallback) {
                            endCallback();
                        }
                    }
                };
            }
        });

    }

});