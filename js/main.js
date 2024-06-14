$(document).ready(function() {
   
    // $(window).scroll(function() {
    //     let scrTop = $(window).scrollTop();
    //     handleSection2Scroll(scrTop);
    // });
    
    
    // 디자인 슬라이드 효과
    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()
        let buildingTop = $(".building").offset().top
        let buildingHeight = $(".building").height()
        let elvHeight = $(".designSlide_elv").height()
        let aniLength = buildingHeight - elvHeight //애니메이션 구간
        let distance = scrTop - buildingTop
        let ani_per = distance / aniLength // 0~>1
        let ani_per2 = ani_per*66.666
        


        
        //도달하지 못한 상황
        if(distance<0){
            $(".designSlide_elv").removeClass("fixed").removeClass("bottom")
        }

        //엘리베이터 진행중인 상황
        if(distance>=0 && distance<aniLength){
            $(".designSlide_elv").addClass("fixed").removeClass("bottom")
            $(".designTrain").css("transform",`translateY(${-ani_per2}%)`)
        }

        //엘리베이터를 지나친 상황
        if(distance>aniLength){
            $(".designSlide_elv").removeClass("fixed").addClass("bottom")
        }

    })

    //----------------------------------오디오 슬라이드 효과-------------------------------------------------
    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()
        let buildingTop = $(".audioBuilding").offset().top
        let buildingHeight = $(".audioBuilding").height()
        let elvHeight = $(".audioElv").height()
        let aniLength = buildingHeight - elvHeight //애니메이션 구간
        let distance = scrTop - buildingTop
        let ani_per = distance / aniLength // 0~>1
        let ani_per410 = ani_per*410  
        let ani_per80 = ani_per*80
        let ani_per065 = 1-(ani_per*0.35)
  
        //도달하지 못한 상황
        if(distance<0){
            $(".audioElv").removeClass("fixed").removeClass("bottom")
        }

        //엘리베이터 진행중인 상황
        if(distance>=0 && distance<aniLength){
            $(".audioElv").addClass("fixed").removeClass("bottom")
            $(".headphoneImg").css("transform",`translate(${-ani_per410}px, ${ani_per80}px)scale(${ani_per065})`)
            $(".soundImg").addClass("on")
            // transform: translate(-410px, 80px) scale(0.65);

        }

        //엘리베이터를 지나친 상황
        if(distance>aniLength){
            $(".audioElv").removeClass("fixed").addClass("bottom")
        }

    })
    // --------------------------------------------------------------------------------
    
 


    // 2섹션 텍스트 효과
    // function handleSection2Scroll(scrTop) {
    //     $(".designContent .txtframe>p").each(function() {
    //         if (scrTop > $(this).offset().top - window.innerHeight * 0.7) {
    //             $(this).addClass("on");
    //         } else {
    //             $(this).removeClass("on");
    //         }
    //     });
    // }
    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".designContent>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
    })

    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".prototype>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
    })

    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".noiseCancelling>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
    })
    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".noiseEffect").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
    })
    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".titleFrame>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
    })
   



    

    //-------------------------------------------------------------- 

    // 4섹션 휴대용 바이저 텍스트 슬라이드
    var visorSlide_swiper = new Swiper(".visorTxt_station", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });



    //-------------------------------------------------------------- 

    var soundTxtSlide_swiper = new Swiper(".soundtxtStation", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });

    //-------------------------------------------------------------- 

    var batteryTxtSlide_swiper = new Swiper(".batterytxtStation", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });



    // 팝업 슬라이드
    $(".contentTxtframe>.subContents_btn").click(function(){
        $(".modal").addClass("on")
        $(".contentPopup").addClass("on")
    })
    $(".popup_close").click(function(){
        $(".modal").removeClass("on")
        $(".contentPopup").removeClass("on")
    })
    var popup_swiper = new Swiper(".popupStation", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".popupPage.swiper-pagination",
            clickable: true,
          },
      });




















});