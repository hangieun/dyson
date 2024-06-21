$(document).ready(function() {
   
    
    // header 메뉴
    let scrTop = 0
    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()
        if(scrTop>200){
            $(".headerWrap").hide()
        }else{
            $(".headerWrap").show()
        }

    })

    $(".gnb>li").click(function(){
        $(".gnb>li").removeClass("on")
        $(this).addClass("on")
    })
    $(".gnb>li").mouseover(function(){
        $(".header").addClass("on")
        $(this).find(".subMenu").addClass("on")
        $(".wrap").addClass("on")
    })
    $(".gnb>li").mouseout(function(){
        $(".header").removeClass("on")
        $(this).find(".subMenu").removeClass("on")
        $(".wrap").removeClass("on")
    })

    // tablet header
    $(".menuOpen").click(function(){
        $(".mainIndex_tab").addClass("on")
    })
    $(".menuClose").click(function(){
        $(".mainIndex_tab").removeClass("on")
    })
    
    //mobile header
    $(".mo_menuOpen").click(function(){
        $(".mobile_mainIndex").addClass("on")
    })
    $(".mo_menuClose").click(function(){
        $(".mobile_mainIndex").removeClass("on")
    })
    

     // 모바일 footer 토글
     $(".footMenu h6").click(function() {
        $(".footMenu h6").not(this).removeClass("open").siblings("li").slideUp();
        $(this).toggleClass("open").siblings("li").slideToggle();
    });



});