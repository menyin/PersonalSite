/**
 * Created by CNY on 2016/11/1.
 */
define(function (require, exports, module) {
    module.exports = Loading;//面向对象必须用 module.exports而不是直接用exports
    function Loading(aImgSrc) {
        this.aImg = aImgSrc;
    }

    Loading.prototype.start = start;
    function start(endCallback) {
        console.log(this.aImg);
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