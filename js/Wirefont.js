/**
 * Created by CNY on 2016/11/7.
 */
define(function (require, exports, module) {
    module.exports = Wirefont;
    function Wirefont() {
        this.init();
    }

    Wirefont.prototype.init = function () {
        $('.wirefont li a').each(function (i) {
            var sTxt = $(this).html();
            var html = '';
            for (var j = 0; j < sTxt.length; j++) {
                html += '<span>' + sTxt[j] + '</span>'
            }
            $(this).html(html);
        });
        // 文档加载之初span的offsetLeft计算需要时间，所以做了延迟
        setTimeout(function () {
            $('.wirefont li a').each(function (i) {
                var aSpan = $(this).children('span');
                //布局转换
                aSpan.each(function () {
                    $(this).css({
                        top: this.offsetTop,
                        left: this.offsetLeft
                    })
                });
                aSpan.each(function () {
                    $(this).css({
                        position: 'absolute'
                    })
                    this.startTop = parseInt($(this).css('top'));
                });

                //琴弦效果
                aSpan.each(function () {
                    var startY = 0;
                    $(this).mouseover(function (e) {
                        startY = e.pageY;
                    });
                    $(this).mousemove(function (e) {
                        var iDirec = e.pageY > startY ? 1 : -1;
                        var iDisY = Math.abs(e.pageY - startY);
                        var iTop = parseInt($(this).css('top')) + iDisY;
                        $(this).css('top', iTop);
                        var iNowIndex = $(this).index();
                        if (iDisY > 30) {
                            aSpan.each(function () {
                                $(this).animate({'top': this.startTop}, 1000, 'elasticOut');
                            });
                        } else {
                            console.log(aSpan);
                            var iddd=0
                            aSpan.each(function (i) {
                                //document.title = iDisY + '-' + iNowIndex + '-' + i;
                                //if (iDisY - Math.abs(iNowIndex - i) > 0) {
                                    document,title=3333;
                                    var iCurrDisY = iDirec * (iDisY - Math.abs(iNowIndex - $(this).index()));
                                    document, title = 444;
                                    $(this).css({'top': this.startTop + this.iCurrDisY});
                                    document, title = 555;

                                //}

                            });
                            $(this).css({'top': this.startTop + this.iCurrDisY});
                        }
                    });
                    $(this).mouseout(function () {
                        aSpan.each(function () {
                            $(this).animate({'top': this.startTop}, 1000, 'elasticOut');
                        });

                    });
                });
            });
        }, 1000);

    };
});
