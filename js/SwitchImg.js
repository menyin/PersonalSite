/**
 * Created by CNY on 2016/11/21.
 */
define(function (require, exports, module) {
    function SwitchImg() {
        this.switchimg = $('.switchimg');
        this.switchimg_ul=$('.switchimg_ul');
        this.switchimg_dv = $('.switchimg_dv');
    }
    module.exports=SwitchImg;
    SwitchImg.prototype.init= function (data) {
        //初始化ul
        var sUlHtml = '';
        for (var i=0;i<data.imgs.length;i++) {
            sUlHtml+='<li style="z-index:'+i+';"><a href="javascript:;" style="background:url('+data.imgs[i]+');"></a></li>'
        }
        sUlHtml += '<a href="javascript:;" class="switchimg_bt1"></a><a href="javascript:;" class="switchimg_bt2"></a>';
        this.switchimg_ul.html(sUlHtml);
        //初始化文字描述
        var sDvhtml = '<h2>'+data.title+'</h2><h4>'+data.title_sub+'</h4><p>'+data.desc+'</p>';
        this.switchimg_dv.html(sDvhtml);
        //初始化图集按钮
        var aLi = this.switchimg_ul.find('li');
        var iZIndex = aLi.size();
        var iNow=0;
        $('.switchimg_bt1').click(function () {
            btClick(-1);
        });
        $('.switchimg_bt2').click(function () {
            btClick(1);
        });
        function btClick(iSwitch) {
            if (iNow>aLi.size()-1) {
                iNow =0;
            }
            aLi.get(iNow).style.transition = aLi.get(iNow).style.webkitTransition = '1s ease';
            aLi.get(iNow).style.left = iSwitch==1?'100%':'-100%';
            aLi.get(iNow).style.opacity= '0';
            aLi.get(iNow).addEventListener('transitionend', liEnd, false);
            aLi.get(iNow).addEventListener('webkitTransitionEnd', liEnd, false);
        }
        function liEnd() {
            aLi.get(iNow).removeEventListener('transitionend', liEnd, false);
            aLi.get(iNow).removeEventListener('webkitTransitionEnd', liEnd, false);
            aLi.get(iNow).style.transition = aLi.get(iNow).style.webkitTransition = 'none';
            aLi.get(iNow).style.transform = aLi.get(iNow).style.webkitTransform = 'scale(1.2)';
            aLi.get(iNow).style.zIndex= iZIndex++;
            aLi.get(iNow).style.transition = aLi.get(iNow).style.webkitTransition = '0.3s ease'
            setTimeout(function () {
                aLi.get(iNow).style.transform = aLi.get(iNow).style.webkitTransform = 'rotateZ(-2deg) scale(1)';
                aLi.get(iNow).style.left = '0px';
                aLi.get(iNow).style.opacity= '1';
                iNow++;
            },30);
        }
    };
    SwitchImg.prototype.in= function (endCallback) {
        this.switchimg.css({top: 210}).animate({opacity: 1}, 'easeOut', function () {
            if (endCallback) {
                endCallback();
            }
        });
    }
    SwitchImg.prototype.out= function (data) {
        this.switchimg.animate({opacity: 1}, 'easeOut', function () {
            this.css({top: -1000});
            if (endCallback) {
                endCallback();
            }
        });
    }
});