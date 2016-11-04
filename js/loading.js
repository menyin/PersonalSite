/**
 * Created by CNY on 2016/11/1.
 */
define(function (require, exports, module) {
    module.exports = Loading;//面向对象必须用 module.exports而不是直接用exports
    function Loading(aImgSrc) {
        this.aImg = ['http://localhost:63342/PersonalSite/images/logo.png',
            'http://localhost:63342/PersonalSite/images/main_bg.png'];
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
                oImg.onload = function () {
                    procsse();
                };
                oImg.onerror= function () {
                    console.error('Error:img load error,it is src="' + this.src + '"');
                    procsse();
                };
                function procsse() {
                    num++;
                    $('.load_img4').html(num * 100 / aImg.length + '%');
                    if (num == aImg.length) {
                        $('.load_img2,.load_img3').css({
                            'animation-play-state': 'paused',
                            '-webkit-animation-play-state': 'paused'
                        })
                        $('.loading').fadeOut();
                        if (endCallback) {
                            endCallback();
                        }
                    }
                }
                oImg.src = aImg[i];

            }
        });

    }

});