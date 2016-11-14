/**
 * Created by CNY on 2016/11/11.
 */
define(function (require, exports, module) {
    module.exports = Cloud3d;
    function Cloud3d() {
    }
    Cloud3d.Ball=Ball;
    Cloud3d.Cone=Cone;
    Cloud3d.Cylinder=Cylinder;

    //圆球
    function Ball(oUl,sTxt) {
        this.init(oUl, sTxt);
    }
    Ball.prototype.init = function (oUl,sTxt) {
        this.oUl=oUl;
        //使得爆炸效果不至于出现滚动条

        //var oUl = document.getElementById('circle');

        //假设等差双边数列公差=2，首项=3，则得出：2*n*n+2n-1<=sTxt.lenth。   而球面层数layers=2n-1
        var n = 0;
        for (var i = 3; i < 20; i++) {
            if (2 * i * i + 2 * i - 1 > sTxt.length) {
                n = i - 1;
                break;
            }
        }
        var layers = 2 * n - 1;

        //填充li到ul
        sTxt = sTxt.substring(0, 2 * n * n + 2 * n-1);
        for (var i = 0; i < sTxt.length; i++) {
            var oLi = document.createElement('li');
            oLi.innerHTML = sTxt[i];
            oLi.id = i;
            oUl.appendChild(oLi);
        }

        //假设园半径r=150px
        var rMin = 120;
        var rMax = 2000;
        var aLi = oUl.getElementsByTagName('li');
        for (var layer = 1; layer <= layers; layer++) {
            var nums = getLayerNums(layer);
            var aph = Math.PI * layer / (layers + 1);
            for (var num = 1; num <= nums; num++) {
                var bld = 2 * Math.PI * (num - 1) / nums;

                var x1 = rMin * Math.sin(aph) * Math.cos(bld);
                var y1 = rMin * Math.cos(aph);
                var z1 = rMin * Math.sin(aph) * Math.sin(bld);
                var transXYZ1 = 'translate3d(' + x1 + 'px,' + y1 + 'px,' + z1 + 'px' + ')';
                transXYZ1 += 'rotateY(' + (Math.PI / 2 - bld) + 'rad)';
                transXYZ1 += ' rotateX(' + (aph - Math.PI / 2) + 'rad)';

                var x2 = rMax * Math.sin(aph) * Math.cos(bld);
                var y2 = rMax * Math.cos(aph);
                var z2 = rMax * Math.sin(aph) * Math.sin(bld);
                var transXYZ2 = 'translate3d(' + x2 + 'px,' + y2 + 'px,' + z2 + 'px' + ')';
                transXYZ2 += 'rotateY(' + (Math.PI / 2 - bld) + 'rad)';
                transXYZ2 += ' rotateX(' + (aph - Math.PI / 2) + 'rad)';

                var index = getIndex(layer, num);
                aLi[index].minTransform = transXYZ1;
                aLi[index].maxTransform = transXYZ2;
                aLi[index].transition = 'all 1s ease';
                aLi[index].webkitTransition = 'all 1s ease';

                //设置最初状态在最大状态且透明
                aLi[index].style.transform = transXYZ2;
                aLi[index].style.webkitTransform = transXYZ2;
                aLi[index].style.opacity = 0;

            }
        }
        //获取第layer层里的字数
        function getLayerNums(layer) {
            if (layer < (layers + 1) / 2) {
                return 3 + (layer - 1) * 2
            } else {
                layer = layers + 1 - layer;
                return 3 + (layer - 1) * 2
            }
        }
        //获取当前字的索引
        function getIndex(layer, num) {
            if (layer <= (layers + 1) / 2) {
                var index = 3 * (layer - 1) + (layer - 1) * (layer - 2) + num - 1;
                return index;
            } else {
                var total1 = 3 * (layers + 1) / 2 + ((layers + 1) / 2) * ((layers + 1) / 2 - 1);
                var nn = layers + 1 - layer;
                var total2 = 3 * nn + nn * (nn - 1);
                var centerNums = 3 + ((layers + 1) / 2 - 1) * 2;
                var index = 2 * total1 - total2 - centerNums + num - 1;
                return index;
            }
        }
    };
    Ball.prototype.in = function () {
        var aLi =  this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++ ) {
            aLi[i].transform = aLi[i].minTransform;
            aLi[i].style.webkitTransform = aLi[i].minTransform;
            aLi[i].style.opacity = 1;
        }
        this.state = 'in';//记录图形所处状态
    };
    Ball.prototype.out = function () {
        var aLi =  this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++ ) {
            aLi[i].transform = aLi[i].maxTransform;
            aLi[i].style.webkitTransform = aLi[i].maxTransform;
            aLi[i].style.opacity = 0;
        }
        this.state = 'out';//记录图形所处状态
    };
    Ball.prototype.rotateStart = function () {
        var iNow=0;
        var _this=this;
        this.oUl.timer=setInterval(function () {
            _this.oUl.style.transform = 'rotateX(' +(iNow+2) + 'deg)'+'rotateY(' + iNow + 'deg)'+'rotateZ(' + (iNow+1) + 'deg)';
            iNow++;
        },100);
    };
    Ball.prototype.rotateStop = function () {
        clearInterval(this.oUl.timer);
    };
    //圆锥
    function Cone(oUl, sTxt) {
        this.init(oUl, sTxt);
    }
    Cone.prototype.init = function (oUl, sTxt) {
        this.oUl=oUl;
        //假设圆锥的等差数列首项1 公差为2
        var layers = 0;
        for (var i = 3; i < 20; i++) {
            if (i*i> sTxt.length) {
                layers = i - 1;
                break;
            }
        }

        //填充li到ul
        sTxt = sTxt.substring(0,layers*layers);
        for (var i=0;i<sTxt.length;i++) {
            var oLi = document.createElement('li');
            oLi.innerHTML = sTxt[i];
            oLi.id=i;
            oUl.appendChild(oLi);
        }

        //假设圆锥沿Y中心轴切面时，边与Y轴夹角为30度,假设圆锥高度h=240px
        var h1=190;
        var h2=2000;
        var aLi = oUl.getElementsByTagName('li');
        for (var layer=1;layer<=layers;layer++) {
            var y1 = (h1 / (layers - 1)) * (layer - 1);
            var y2 = (h2 / (layers - 1)) * (layer - 1);
            var nums = 1 + (layer - 1) * 2;
            for (var num=1;num<=nums;num++) {
                var bld = 2*Math.PI*(num-1)/nums;
                var x1 = y1 * Math.tan(Math.PI / 6)*Math.cos(bld);
                var z1 = y1 * Math.tan(Math.PI / 6)*Math.sin(bld);
                var y_rest1 = (h1 / (layers - 1)) * (layer - 1)-h1/2;//为了将所有li向上平移h/2并且不影响x、z，所以另声明一个变量y_rest
                var transXYZ1 = 'translate3d(' +x1+ 'px,' +  y_rest1+ 'px,' + z1 + 'px' + ')';
                transXYZ1 += 'rotateY(' + (Math.PI-bld-Math.PI/2)+'rad)';
                transXYZ1 += ' rotateX(' +(1*Math.PI /6)+'rad)'
                var x2 = y2 * Math.tan(Math.PI / 6)*Math.cos(bld);
                var z2 = y2 * Math.tan(Math.PI / 6)*Math.sin(bld);
                var y_rest2 = (h2 / (layers - 1)) * (layer - 1)-h2/2;//为了将所有li向上平移h/2并且不影响x、z，所以另声明一个变量y_rest
                var transXYZ2 = 'translate3d(' +x2+ 'px,' +  y_rest2+ 'px,' + z2 + 'px' + ')';
                transXYZ2 += 'rotateY(' + (Math.PI-bld-Math.PI/2)+'rad)';
                transXYZ2 += ' rotateX(' +(1*Math.PI /6)+'rad)'
                var index = getIndex(layer, num);
                if (index==0) {
                    aLi[index].minTransform =  'translate3d(' +x1+ 'px,' +  y_rest1+ 'px,' + z1 + 'px' + ')';
                    aLi[index].maxTransform =  'translate3d(' +x2+ 'px,' +  y_rest2+ 'px,' + z2 + 'px' + ')';
                }else {
                    aLi[index].minTransform = transXYZ1;
                    aLi[index].maxTransform = transXYZ2;
                }
                //置最初状态在最大状态且透明
                aLi[index].style.transform = transXYZ2;
                aLi[index].style.webkitTransform = transXYZ2;
                aLi[index].style.opacity = 0;
            }
        }
        //获取当前字的索引
        function getIndex(layer,num) {
            var layerPre=layer-1;
            return layerPre+layerPre*(layerPre-1)+num-1;
        }
    };
    Cone.prototype.in = function () {
        var aLi = this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++) {
            aLi[i].style.transform = aLi[i].minTransform ;
            aLi[i].style.webkitTransform = aLi[i].minTransform;
            aLi[i].style.opacity = 1;
        }
        this.state = 'in';//记录图形所处状态
    };
    Cone.prototype.out = function () {
        var aLi = this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++) {
            aLi[i].style.transform = aLi[i].maxTransform ;
            aLi[i].style.webkitTransform = aLi[i].maxTransform;
            aLi[i].style.opacity = 0;
        }
        this.state = 'out';//记录图形所处状态
    };
    Cone.prototype.rotateStart = function () {
        var iNow=0;
        var _this=this;
        this.oUl.timer=setInterval(function () {
            _this.oUl.style.transform = 'rotateX(' + (iNow+1) + 'deg)'+'rotateY(' + iNow + 'deg)'+'rotateZ(' + (iNow+2) + 'deg)';
            iNow++;
        },100);
    };
    Cone.prototype.rotateStop = function () {
        clearInterval(this.oUl.timer);
    };
    //圆柱
    function Cylinder(oUl, sTxt) {
        this.init(oUl, sTxt);
    }

    Cylinder.prototype.init = function (oUl, sTxt) {
        this.oUl = oUl;
        //假设假设圆柱高h=200，宽高比ratio=4:5,每层字数在18
        var h1=190;
        var h2=2000;
        var ratio=4/5;
        var layers = 0;
        var nums=14;
        for (var i = 3; i < 20; i++) {
            if (i*nums> sTxt.length) {
                layers = i - 1;
                break;
            }
        }
        //填充li到ul
        sTxt = sTxt.substring(0,layers*nums);
        for (var i=0;i<sTxt.length;i++) {
            var oLi = document.createElement('li');
            oLi.innerHTML = sTxt[i];
            oLi.id=i;
            oUl.appendChild(oLi);
        }
        //
        var aLi = oUl.getElementsByTagName('li');
        var r1=h1*ratio/2
        var r2=h2*ratio/2
        for (var layer=1;layer<=layers;layer++) {
            var y1 = (h1 / (layers - 1)) * (layer - 1)-h1/2;//减去h/2是为了使得图形向上平移并且图形的中心在中央
            var y2 = (h2 / (layers - 1)) * (layer - 1)-h2/2;//减去h/2是为了使得图形向上平移并且图形的中心在中央
            for (var num=1;num<=nums;num++) {
                var bld = 2*Math.PI*(num-1)/nums;
                var x1 = r1 *Math.cos(bld);
                var z1 = r1 *Math.sin(bld);
                var transXYZ1 = 'translate3d(' +x1+ 'px,' +  y1+ 'px,' + z1 + 'px' + ')';
                transXYZ1 += 'rotateY(' + (Math.PI-bld-Math.PI/2)+'rad)';
                var x2 = r2 *Math.cos(bld);
                var z2 = r2 *Math.sin(bld);
                var transXYZ2 = 'translate3d(' +x2+ 'px,' +  y2+ 'px,' + z2 + 'px' + ')';
                transXYZ2 += 'rotateY(' + (Math.PI-bld-Math.PI/2)+'rad)';
                var index = getIndex(layer, num);
                aLi[index].minTransform=transXYZ1
                aLi[index].maxTransform=transXYZ2
                //置最初状态在最大状态且透明
                aLi[index].style.transform = transXYZ2 ;
                aLi[index].style.webkitTransform = transXYZ2;
                aLi[index].style.opacity = 0;
            }
        }

        //获取当前字的索引
        function getIndex(layer,num) {
            return (layer-1)*nums+num-1;
        }
    };
    Cylinder.prototype.in = function () {
        var aLi = this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++) {
            aLi[i].style.transform = aLi[i].minTransform ;
            aLi[i].style.webkitTransform = aLi[i].minTransform;
            aLi[i].style.opacity = 1;
        }
        this.state = 'in';//记录图形所处状态
    };
    Cylinder.prototype.out = function () {
        var aLi = this.oUl.getElementsByTagName('li');
        for (var i=0;i<aLi.length;i++) {
            aLi[i].style.transform = aLi[i].maxTransform ;
            aLi[i].style.webkitTransform = aLi[i].maxTransform;
            aLi[i].style.opacity = 0;
        }
        this.state = 'out';//记录图形所处状态
    };
    Cylinder.prototype.rotateStart = function () {
        var iNow=0;
        var _this=this;
        this.oUl.timer=setInterval(function () {
            _this.oUl.style.transform = 'rotateX(' + iNow + 'deg)'+'rotateY(' + (iNow+1) + 'deg)'+'rotateZ(' + (iNow+2) + 'deg)';
            iNow++;
        },100);
    };
    Cylinder.prototype.rotateStop = function () {
        clearInterval(this.oUl.timer);
    };

});
