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

        let ani_per3 = 0.7+ani_per*0.7
        


        
        //도달하지 못한 상황
        if(distance<0){
            $(".designSlide_elv").removeClass("fixed").removeClass("bottom")
        }

        //엘리베이터 진행중인 상황
        if(distance>=0 && distance<aniLength){
            $(".designSlide_elv").addClass("fixed").removeClass("bottom")
            $(".designTrain").css("transform",`translateY(${-ani_per2}%)`)
            // 이미지 커지기 어두워지면서
            $(".designSlide_bg").css("transform",`scale(${ani_per3})`).css("filter",`brightness(${1-ani_per})`)
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

        /////////////// 1type animation
        let ani_1type = ani_per*100/(100/2) // 0~>100
        let ani_1type_idx = Math.floor(ani_1type) // 0,1
        let ani_1type_progress = ani_1type - ani_1type_idx // 인덱스가 0,1일 때 0~1로 올라가는 소수
        
        let ani_per410 = ani_1type_progress*410  
        let ani_per80 = ani_1type_progress*80
        let ani_per065 = 1-(ani_1type_progress*0.35)
        let ani_per1 = ani_1type_progress*1
        /////////////////////////////////////

        ///////////// 2type animation

        let ani_2type = ani_per*100/(100/3)
        let ani_2type_idx = Math.floor(ani_2type)
        let ani_2type_progress = ani_2type - ani_2type_idx
        let ani_perSlide = ani_per*770
        ////////////////////////////
  
        //도달하지 못한 상황
        if(distance<0){
            $(".audioElv").removeClass("fixed").removeClass("bottom")
        }

        //엘리베이터 진행중인 상황
        if(distance>=0 && distance<aniLength){
            $(".audioElv").addClass("fixed").removeClass("bottom")
            if(ani_1type_idx==0){
                $(".headphoneFrame").css("transform",`translate(${-ani_per410}px, ${ani_per80}px)scale(${ani_per065})`)
            }
            else if(ani_1type_idx==1){
                $(".soundImg").css("opacity",ani_per1)
            }

            $(".soundtxtTrain").css("transform",`translateY(${-ani_perSlide}px)`)
            // if(ani_2type_idx==0){
                
            // }
            // else if(ani_2type_idx==1){
            //     let count = 0
            //     count++
            //     if(count>2){count=0}
            //     $(".soundtxtTrain").css("transform",`trasnlateY(${count*-33.333}%)`)
            // }


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

    var batteryTxtSlide_swiper = new Swiper(".batterytxtStation", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });

    // -----------------------------------------------
    // 탭메뉴 화살표
    document.addEventListener('DOMContentLoaded', function() {
        const titleElement = document.querySelector('.tabTitle');
        
        titleElement.addEventListener('click', function() {
            this.classList.toggle('open');
        });
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