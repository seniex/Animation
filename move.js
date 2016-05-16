/**
 * Created by Action on 2016/3/31 0031.
 */
$(document).ready(function(){
    $("#show").click(function(){
        $("#content").slideDown(1000)
    })
    $("#hide").click(function(){
        $("#content").slideUp(1000)
    })
    $("#hideShow").click(function(){
        $("#content").slideToggle(1000)
    })
})