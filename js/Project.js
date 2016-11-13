/**
 * Created by CNY on 2016/11/9.
 */
define(function (require, exports, module) {
    module.exports=Project;
    function Project() {
    }
    Project.in= function () {
        $('#ddddd').animate({top:300},1000,'linear', function () {
            alert('ok');
        });
    };
});
