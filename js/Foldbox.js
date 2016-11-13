/**
 * Created by CNY on 2016/11/2.
 */
define(function (require, exports, module) {
    module.exports = Foldbox;
    function Foldbox(data) {
        this.foldbox = $('.foldbox');
        this.init();
    }

    Foldbox.prototype.init = function () {
        var _this = this;
        //卷帘效果
        _this.foldbox.hover(function () {
            var iNow=0;
            var aDiv=_this.foldbox.find('div');
            var oTimer = setInterval(function () {
                if (iNow==aDiv.size()-1) {
                    clearInterval(oTimer);
                }
                aDiv.eq(iNow).addClass('foldopen');
                iNow++;
            },100);
            _this.foldbox.height(aDiv.last().offset().top+32);//解决卷帘一下来就上去问题
            //$('.foldbox div').each(function(i) {
            //    console.log(i+'----'+this.className);
            //});
        }, function () {
            var aDiv=_this.foldbox.find('div');
            var iNow=aDiv.size()-1;
            var oTimer = setInterval(function () {
                if (iNow==0) {
                    clearInterval(oTimer);
                }
                aDiv.eq(iNow).removeClass('foldopen');
                iNow--;
            },100);
            _this.foldbox.height(54);//解决卷帘一下来就上去问题

        });
        //左右摆动效果
        _this.foldbox.mousemove(function (e) {
            //左右倾斜效果
            if (e.pageX < _this.foldbox.offset().left + _this.foldbox.width() / 2) {
                _this.foldbox.css({
                    'transform': 'rotateY(60deg)',
                    '-webkit-transform': 'rotateY(30deg)'
                });
            } else {
                _this.foldbox.css({
                    'transform': 'rotateY(-60deg)',
                    '-webkit-transform': 'rotateY(-30deg)'
                });
            }
        });
        _this.foldbox.mouseleave(function (e) {
            //左右倾斜效果还原
            _this.foldbox.css({
                'transform': 'rotateY(0deg)',
                '-webkit-transform': 'rotateY(0deg)'
            });
        });

    };
});