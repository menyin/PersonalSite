/**
 * Created by CNY on 2016/11/4.
 */
define(function (require, exports, module) {
    module.exports = SlideImg;
});
function SlideImg(a$Li, aProperty, iTime) {
    this.a$Li = a$Li;
    this.iTime = iTime;
    this.aProperty = aProperty;
    //初始化初始位置
    this.gotoImg();
}

SlideImg.prototype.prevent = function () {
    this.aProperty.unshift(this.aProperty.pop());
    this.gotoImg();

};
SlideImg.prototype.next = function () {
    this.aProperty.push(this.aProperty.shift());
    this.gotoImg();
};

SlideImg.prototype.gotoImg = function () {
    this.a$Li.each(function (i) {
        this.css(aProperty[i]);
    });
};