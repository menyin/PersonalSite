/**
 * Created by CNY on 2016/11/20.
 */
define(function (require, exports, module) {
    module.exports=Message;
    function Message() {
    }
    Message.in= function () {
        $('#main').css({background: '#413235 url(images/main_bg3.jpg) no-repeat center top'});
        $('.msgboard').css({top:200}).animate({opacity: 1}, 800, 'swing', function () {
            //执行开始
            var aPageList0 = getPagingList(1, iPageSize)
            createPageNav(1, aPageList0);
            var aLi0 = createList(aPageList0);
            //list_item渐入
            var iNow = 0;
            var timeer = setInterval(function () {
                openLi(aLi0[iNow]);
                if (iNow == aLi0.length - 1) {
                    clearInterval(timeer);
                }
                iNow = iNow + 1;
            }, 300);
        });
    };
    Message.out= function () {
        $('.msgboard').animate({opacity: 0}, 800, 'swing', function () {
            $('.msgboard').css({top: -1000});
        });
    };

    var data = [
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        },
        {
            message: "好好学习天天向上",
            reply: "有道理有道理，做一个IT精英"
        }
    ];
   getPagingList=function (iPageNum, iSize) {
        var aPageData = [];
        var iStart = (iPageNum - 1) * iSize;
        var iEnd = iPageNum * iSize - 1;
        for (var i = iStart; i <= iEnd; i++) {
            aPageData.push(data[i]);
        }
        return {data: aPageData, totals: data.length};
    }

    //    全局变量
    var iPageSize = 3;
    var oFooter = document.getElementById('msgboard_footer');
    var oList = document.getElementById('msgboard_list');
    //重绘导航
    function createPageNav(iCurrNum, aPageList) {
        oFooter.innerHTML = '';
        var oFragment = document.createDocumentFragment()
        if (iCurrNum != 1) {
            var oAFirst = document.createElement('a');
            oAFirst.innerHTML = '首页';
            oFragment.appendChild(oAFirst);
            var oAUp = document.createElement('a');
            oAUp.innerHTML = '上一页';
            oFragment.appendChild(oAUp);
        }

        var iNums = Math.ceil(aPageList.totals / iPageSize);
        for (var i = 0; i < iNums; i++) {
            var oA = document.createElement('a');
            if (iCurrNum == i + 1) {
                oA.className = 'active';
            }
            oA.index = i;
            oA.onclick = oAClick;
            oA.innerHTML = i + 1;
            oFragment.appendChild(oA);
        }
        if (iCurrNum != iNums) {
            var oADown = document.createElement('a');
            oADown.innerHTML = '下一页';
            oFragment.appendChild(oADown);
            var oAEnd = document.createElement('a');
            oAEnd.innerHTML = '末页';
            oFragment.appendChild(oAEnd);
        }
        oFooter.appendChild(oFragment);

    }

    function createList(aPageList) {
        oList.innerHTML = '';
        var sHtml = '';
        for (var i = 0; i < aPageList.data.length; i++) {
            sHtml += '<li class="msgboard_item"><div class="msg_phto"><img src="images/msg_phto1.png" alt=""/></div><div class="msg_point"></div><div class="msg_con">' + aPageList.data[i].message + '</div><div class="msg_reply">' + aPageList.data[i].reply + '</div></li>';
        }
        oList.innerHTML = sHtml;
        var ali = oList.getElementsByTagName('li');
        for (var i = 0; i < ali.length; i++) {
            ali[i].style.opacity = 0;
        }
        var iMarginTopBottom = parseInt(getCurrentStyle(ali[0])['marginTop']) + parseInt(getCurrentStyle(ali[0])['marginBottom']);
        oList.style.height = (ali[0].offsetHeight + iMarginTopBottom) * ali.length + 'px';
        return ali;
    }

    function oAClick() {
        //PageNav淡出
        oFooter.style.transition = oFooter.style.webkitTransition = '.3s';
        oFooter.style.opacity = 0;
        oFooter.style.marginTop = '50px';
        oFooter.addEventListener('webkitTransitionEnd', oFooterEnd, false);
        oFooter.addEventListener('transitionend', oFooterEnd, false);
        var _oAThis = this;

        function oFooterEnd() {
            oFooter.removeEventListener('transitionend', oFooterEnd, false);
            oFooter.removeEventListener('webkitTransitionEnd', oFooterEnd, false);
            //list出去
            oList.style.height = 0;
            oList.style.transition = oList.style.webkitTransition = 'height 1.5s';
            oList.addEventListener('webkitTransitionEnd', oListEnd, false);
            oList.addEventListener('transitionend', oListEnd, false);
//            setTimeout(oListEnd, 2000);
            //list_item渐出
            var ali = oList.getElementsByTagName('li');
            (function liTimer(i) {
                function liEnd(e) {
                    this.removeEventListener('transitionend', liEnd, false);
                    this.removeEventListener('webkitTransitionEnd', liEnd, false);
                    e.cancelBubble = true;
                    return false;
                }

                setTimeout(function () {
                    ali[i].style.transition = oFooter.style.webkitTransition = '.3s';
                    ali[i].style.opacity = 0;
                    ali[i].style.marginTop = '50px';
                    ali[i].addEventListener('webkitTransitionEnd', liEnd, false);
                    ali[i].addEventListener('transitionend', liEnd, false);
                    if (i > 0) {
                        liTimer(i - 1);
                    }
                }, 100);
            })(ali.length - 1);

            function oListEnd(e) {
                if (e.target.className == 'msgboard_item') {
                    return false;
                }
                console.log(e);
                oList.removeEventListener('transitionend', oListEnd, false);
                oList.removeEventListener('webkitTransitionEnd', oListEnd, false);
                //PageNav淡入
                var aNewPageList = getPagingList(_oAThis.index + 1, iPageSize);
                createPageNav(_oAThis.index + 1, aNewPageList);
                oFooter.style.transition = oFooter.style.webkitTransition = '.3s';
                oFooter.style.opacity = 1;
                oFooter.style.marginTop = '0px';
                //list渐入-高度变大
                var aNewList = createList(aNewPageList);
                oList.style.transition = oList.style.webkitTransition = '3s';
                var iMarginTopBottom = parseInt(getCurrentStyle(aNewList[0])['marginTop']) + parseInt(getCurrentStyle(aNewList[0])['marginBottom']);
                oList.style.height = (aNewList[0].offsetHeight + iMarginTopBottom) * aNewList.length + 'px';

                //list_item渐入
                var iNow = 0;
                var timeer = setInterval(function () {
                    openLi(aNewList[iNow]);
                    if (iNow == aNewList.length - 1) {
                        clearInterval(timeer);
                    }
                    iNow = iNow + 1;
                }, 500);


            }

        }

    }

    function openLi(oLi) {
        oLi.style.webkitTransition = oLi.style.transition = '0.3s cubic-bezier(.17,.67,.81,1.76)';
        oLi.style.opacity = 1;
        oLi.style.marginTop = '0px';
        oLi.style.webkitTransform = oLi.style.transform = 'rotateY(0deg)';
        var dvReply = oLi.getElementsByTagName('div')[3];
        dvReply.style.webkitTransition = dvReply.style.transition = '0.3s cubic-bezier(.17,.67,.81,1.76) 0.4s';
        dvReply.style.webkitTransform = dvReply.style.transform = 'rotateX(0deg)';

    }



    function getCurrentStyle(node) {
        var style = null;

        if (window.getComputedStyle) {
            style = window.getComputedStyle(node, null);
        } else {
            style = node.currentStyle;
        }

        return style;
    }
    function getPositionTop(obj){
        var iTop=0;
        while(obj) {
            iTop+=obj.offsetTop;
            obj=obj.offsetParent;
        }
        return iTop;
    }
});
