/**
 * Created by Action on 2016/3/31 0031.
 */
$(document).ready(function(){
    $("#btn").click(function(){
        //$("p").hide(1000,function(){
        //    alert("1212")
        //})
        $("p").css("color","red").slideUp(1000).slideDown(1000)
    })
})