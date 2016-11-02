/**
 * Created by CNY on 2016/11/2.
 */
define(function (require, exports, module) {
    module.exports = Brand;
    function Brand() {
    }
    function waveMove() {
        //添加样式
        var sClass = ''
        $('.brand_address span').each(function (i) {
            sClass += '.brand_address.wave span:nth-of-type(' + (i + 1) + ') {-webkit-animation: wave 1s ease ' + i/20 + 's infinite;-o-animation: wave 1s ease ' + i/20 + 's infinite;animation: wave 1s ease ' + i/20 + 's infinite;}';
        });
        console.log(sClass);
        $('<style id="wave_style">').html(sClass).appendTo('head');
        //添加hover事件
        $('.brand').hover(function () {
            $('.brand_address').addClass('wave').css('background-position','center 44px');
        }, function () {
            $('.brand_address').removeClass('wave').css('background-position','center 36px');
        });
    }
    waveMove();
    Brand.start = function (endCallback) {
        $('.brand').animate({top: -90}, 1000, 'bounceOut', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
});
