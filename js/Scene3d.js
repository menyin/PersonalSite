/**
 * Created by CNY on 2016/11/6.
 */
define(function (require, exports, module) {
    module.exports=Scene3d;
    function Scene3d() {
        this.scene3d=$('.scene3d');
        this.init();
    }
    var i=0;
    Scene3d.prototype.init= function () {
        var _this=this;
        this.scene3d.mousemove(function (e) {
            var iCenterX = _this.scene3d.offset().left + _this.scene3d.width()/2;
            var iDisX= e.pageX-iCenterX;
            _this.scene3d.css({
                'perspective-origin':1-(iDisX*100/(_this.scene3d.width()/2))+'% center',
               '-webkit-perspective-origin':1-(iDisX*100/(_this.scene3d.width()/2))+'% center'
            });
        });
    };
    Scene3d.prototype.start= function (endCallback) {
        this.scene3d.animate({'top':150,'opacity':1},800,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };

});