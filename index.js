/**
 * Created by Action on 2016/3/30 0030.
 */
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").hide(1000);
    });
    $("#btn2").click(function(){
        $("p").show(1000);
    });
    $("#btn3").click(function(){
        $("p").toggle(500);
    });
});

