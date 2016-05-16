/**
 * Created by Action on 2016/4/18 0018.
 */
$(document).ready(function(){
    $(".main>a").click(function(){
        var ulNode = $(this).next("ul");
        //if(ulNode.css("display")=="none"){
        //    ulNode.css("display","block")
        //}
        //else ulNode.css("display","none")
        ulNode.slideToggle()
        changeIcon($(this))
    })
    $(".mainh>a").hover(function(){
        var unNode = $(this).next("ul");
        unNode.slideToggle()
        changeIcon($(this))
    })
    $("#btn").click(function(){
        alert("文本"+$("#text").html())
    })
})

function changeIcon(mainNode){
    if(mainNode){
        if(mainNode.css("background-image").indexOf("biaoshi.gif")>=0){
            mainNode.css("background-image","url('img/biaoshidown.gif')")
        }else{
            mainNode.css("background-image","url('img/biaoshi.gif')")
        }
    }
}