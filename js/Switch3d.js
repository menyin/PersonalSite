/**
 * Created by CNY on 2016/11/16.
 */
define(function (require, exports, module) {
    module.exports = Switch3d;
    function Switch3d(oList,oBtns) {
        this.init(oList,oBtns);
    }
    Switch3d.prototype.init= function (oList,oBtns) {
        var aLi = oList.children;
        var aBtns = oBtns.children;
        var iZ = document.documentElement.clientWidth / 2;
        var iNow = 0;
        oList.style.WebkitTransformOrigin = "center center " + iZ + "px";
        oList.style.transformOrigin = "center center " + iZ + "px";
        window.onresize = function () {
            iZ = document.documentElement.clientWidth / 2;
            oList.style.WebkitTransformOrigin = "center center " + iZ + "px";
            oList.style.transformOrigin = "center center " + iZ + "px";
        }
        for (var i = 0; i < aBtns.length; i++) {
            aBtns[i].index = i;
            aBtns[i].onclick = function () {
                if (iNow == this.index) {
                    return;
                }
                aBtns[iNow].className = "";
                tab(iNow, this.index);
                iNow = this.index;
                aBtns[iNow].className = "active";
            };
        }
        function tab(iOld, iNow) {
            oList.style.transition = ".8s";
            oList.addEventListener("webkitTransitionEnd", end, false);
            oList.addEventListener("transitionend", end);
            if (iOld > iNow) {
                aLi[iNow].className = "prev";
                oList.style.WebkitTransform = "rotateY(-90deg)";
                oList.style.transform = "rotateY(-90deg)";
            }
            else {
                aLi[iNow].className = "next";
                oList.style.WebkitTransform = "rotateY(90deg)";
                oList.style.transform = "rotateY(90deg)";
            }
            function end() {
                    aLi[iOld].className = "";
                    oList.style.transition = "none";
                    aLi[iNow].className = "active";
                    oList.style.WebkitTransform = "rotateY(0deg)";
                    oList.style.transform = "rotateY(0deg)";
            }
        }
    };
    Switch3d.prototype.in= function () {

    };
    Switch3d.prototype.out= function () {

    };
});
