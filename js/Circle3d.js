/**
 * Created by CNY on 2016/11/21.
 */
define(function (require, exports, module) {
    module.exports=Circle3d;
    function Circle3d(oCircle3dUl,funcAClick) {
        this.oCircle3dUl=oCircle3dUl;
        this.funcAClick = funcAClick;
        this.init();
    }
    Circle3d.prototype.init= function () {
        var _this=this;
        var aLi = circle3d.getElementsByTagName('li');
        this.aLiArray = [];
        for (var i=0;i<aLi.length;i++) {
            var oA = aLi[i].getElementsByTagName('a')[0];
            oA.onclick = function () {
                var sTarget = this.dataset['target'];
                _this.funcAClick(sTarget);
            };
            this.aLiArray.push(aLi[i]);
        }
        //设置随机圆形背景
        var circle3d_bg = circle3d.getElementsByTagName('i');
        for (var i=0;i<circle3d_bg.length;i++) {
            var iRandowTop=Math.random()*400;
            var iRandowLeft=Math.random()*1000;
            var iRandowSize=Math.random()*200;
            var iRandowOpacity=Math.random();
            circle3d_bg[i].style.position='absolute';
            circle3d_bg[i].style.width = circle3d_bg[i].style.height = iRandowSize + 'px';
            circle3d_bg[i].style.borderRadius='50%';
            circle3d_bg[i].style.background='#ffffff';
            circle3d_bg[i].style.opacity=iRandowOpacity;
            circle3d_bg[i].style.top=iRandowTop+'px';
            circle3d_bg[i].style.left=iRandowLeft+'px';
        }
    };
    Circle3d.prototype.in= function (endCallback) {
        var _this=this;
        $(this.oCircle3dUl).css({top: 160}).animate({opacity: 1}, 500, 'easeOut', function () {
            _this.aLiArray.sort(randomSort);
            var iNow=0;
            var timer=setInterval(function () {
                $(_this.aLiArray[iNow]).addClass('scaleIn');
                iNow++;
                if (iNow==_this.aLiArray.length-1) {
                    clearInterval(timer);
                    _this.state = 'in';
                    if (endCallback) {
                        endCallback();
                    }
                }
            },500);
        });

    };
    Circle3d.prototype.out= function (endCallback) {
        var _this = this;
        $(this.oCircle3dUl).animate({opacity: 0}, 500, 'easeOut', function () {
            _this.aLiArray.sort(randomSort);
            var iNow = 0;
            var timer = setInterval(function () {
                $(_this.aLiArray[iNow]).removeClass('scaleIn');
                iNow++;
                if (iNow == _this.aLiArray.length - 1) {
                    clearInterval(timer);
                    _this.state = 'out';
                    $(_this.oCircle3dUl).css({top: -1000});
                    if (endCallback) {
                        endCallback();
                    }
                }
            }, 500);
        });
    };
    //随机排序对比函数
    function randomSort(a,b) {
        return Math.random()>0.5?-1:1;
    }

});