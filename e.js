$(document).ready(function(){
    $(".sub_nav a").hover(function(){
        $(this).addClass("current").siblings().removeClass("current");
        var total = $(".sub_nav a").index($(this));
        $(".box .plans").eq(total).show().siblings().hide();
    })	;
    $(".plans4 img").hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    });
    //
    $(window).scroll(function(){
        if ($(window).scrollTop()>199){
            $(".qnav").css({position: "fixed", top: 0, left:50+"%",marginLeft:-606+"px"});
            $(".qtab").css({paddingTop: 203+"px"});
        } else {
            $(".qnav").css({position: "relative"});
            $(".qtab").css({paddingTop: 0});
        }
    });
});