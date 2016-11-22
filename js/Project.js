/**
 * Created by CNY on 2016/11/9.
 */
define(function (require, exports, module) {
    module.exports=Project;
    function Project() {
    }
    var Circle3d = require('./Circle3d');
    var oCircle3dUl = document.getElementById('circle3d');
    var circle3d=new Circle3d(oCircle3dUl,funcAClick);
    var SwitchImg = require('./SwitchImg');
    var switchimg = new SwitchImg();
    Project.in= function () {
        circle3d.in();
    };
    Project.out= function () {
        if (circle3d.state=='in') {
            circle3d.out();
        }
        if (switchimg.state=='in') {
            switchimg.out();
        }
    };
    function funcAClick(sTarget) {
        circle3d.out(function () {
            var data=getProjectData(sTarget);
            if (!data) {
                alert('数据有误');
                return false;
            }
            switchimg.init(data);
            switchimg.in();
        });
    }

    function getProjectData(sTarget) {
        for (var i=0;i<aProjects.length;i++) {
            if (aProjects[i].id==sTarget) {
                return aProjects[i];
                break;
            }
        }
    }
    var aProjects = [
        {
            id:'tianshizhongguo',
            imgs:[
                'images/project_des1.jpg',
                'images/project_des2.jpg'
            ],
            title:'天使中国活动官网',
            title_sub:'开发周期：5天',
            desc:' 作品从设计、制作、到JS交互效果展示，全是由晓一独立完成，很多细节的处理，均能让人感受到她的巧思； 在个人网站上，不仅能看到她的前端作品，还有 “网页设计、平面设计、绘画作品、视频/flash作品、手工作品”等，可谓多才多艺、令人羡慕~~ 另外，在性格上如此活泼开朗的前端女孩的确少见，想招聘的企业请抓紧时间，赶紧和她联系，人家可是过期不候哈！！'
        },
        {
            id:'qijuwang',
            imgs:[
                'images/project_des1.jpg',
                'images/project_des2.jpg'
            ],
            title:'齐聚网络科技官网',
            title_sub:'开发周期：10天',
            desc:' 这是一个神奇的网站，租房、买房入住快，作品从设计、制作、到JS交互效果展示，全是由晓一独立完成，很多细节的处理，均能让人感受到她的巧思； 在个人网站上，不仅能看到她的前端作品，还有 “网页设计、平面设计、绘画作品、视频/flash作品、手工作品”等，可谓多才多艺、令人羡慕~~ 另外，在性格上如此活泼开朗的前端女孩的确少见，想招聘的企业请抓紧时间，赶紧和她联系，人家可是过期不候哈！！'
        }

    ];
});
