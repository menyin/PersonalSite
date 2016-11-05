/**
 * Created by CNY on 2016/11/4.
 */
define(function (require, exports, module) {
    module.exports = SlideImg;
});
function SlideImg(a$Li, aPropertyData, iTime) {
    this.a$Li = a$Li;
    this.iTime = iTime;
    this.aProperty = aPropertyData;
    //初始化初始位置
    this.gotoImg();
}

SlideImg.prototype.prevent = function (endCallback) {
    this.aProperty.unshift(this.aProperty.pop());
    this.gotoImg(endCallback);
};
SlideImg.prototype.next = function (endCallback) {
    this.aProperty.push(this.aProperty.shift());
    this.gotoImg(endCallback);

};

SlideImg.prototype.gotoImg = function (endCallback) {
    var _this=this;
    this.a$Li.each(function (i) {
        $(this).animate(_this.aProperty[i],1000,'easeOut', function () {
            if (_this.a$Li.size()-1==i&&endCallback) {
                endCallback();
            }
        });
    });
};