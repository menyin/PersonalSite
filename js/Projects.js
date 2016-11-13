/**
 * Created by CNY on 2016/11/8.
 */
define(function (require, exports, module) {
    module.exports = Projects;
    function Projects() {
        this.init();
        this.projects = $('.projects');
    }

    var SlideImg = require('./SlideImg');
    Projects.prototype.init = function () {
        //初始化轮播图片列表
        var a$Li1 = $('.slideimg_box_three li');
        var oProperty = [
            {
                top: 0,
                left:75,
                zIndex: 3,
                opacity: 1,
                active:true
            },
            {
                top: 0,
                left:0,
                zIndex: 2,
                opacity: 0.4
                //webkitTransform: 'scale(0.8) translateZ(-30000px)'
            }, {
                top: 0,
                left:150,
                zIndex: 2,
                opacity: 0.4
            }
        ];
        var slideImg1 = new SlideImg(a$Li1, oProperty, 200);

        //注册前进后退按钮
        $('.bt_prevent').click(function () {
            slideImg1.prevent();
        });
        $('.bt_next').click(function () {
            slideImg1.next();
        });

    };

    Projects.prototype.start= function (endCallback) {
        this.projects.animate({'bottom':94,'opacity':1},800,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
    Projects.prototype.out= function (endCallback) {
        this.projects.animate({'bottom':-500,'opacity':0},200,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
    Projects.prototype.out= function (endCallback) {
        this.projects.animate({'bottom':-500,'opacity':0},200,'swing', function () {
            if (endCallback) {
                endCallback();
            }
        });
    };
});