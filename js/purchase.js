$(function(){

    let faqCount = 0
    $(".faqList>dt").click(function(){
        faqCount = ($(this).index())/2
        if(faqCount>4){faqCount=0}
        if ($(this).hasClass("open")){
            $(this).removeClass("open");
            $(".faqList>dd").eq(faqCount).removeClass("on");
        } else {
            $(".faqList>dt").removeClass("open");
            $(this).addClass("open");
            $(".faqList>dd").removeClass("on");
            $(".faqList>dd").eq(faqCount).addClass("on");
        }
    })





})