$(document).ready(function() {
   
    
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
        let ani_per850 = ani_1type_progress*850
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

            if(ani_1type_idx==1){
                $(".soundtxtStation").addClass("on")
                $(".soundtxtTrain").css("transform",`translateY(${-ani_per850}px)`)
            }else if(ani_1type_idx==0){
                $(".soundtxtStation").removeClass("on")
            }
            

        }

        //엘리베이터를 지나친 상황
        if(distance>aniLength){
            $(".audioElv").removeClass("fixed").addClass("bottom")
        }

    })
    // --------------------------------------------------------------------------------
    
    // tablet 헤드폰 슬라이드 효과
    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()
        let buildingTop = $(".audioBuilding_tab").offset().top
        let buildingHeight = $(".audioBuilding_tab").height()
        let elvHeight = $(".audioElv_tab").height()
        let aniLength = buildingHeight - elvHeight //애니메이션 구간
        let distance = scrTop - buildingTop
        let ani_per = distance / aniLength // 0~>1

        /////////////// 1type animation
        let ani_1type = ani_per*100/(100/2) // 0~>100
        let ani_1type_idx = Math.floor(ani_1type) // 0,1
        let ani_1type_progress = ani_1type - ani_1type_idx // 인덱스가 0,1일 때 0~1로 올라가는 소수
        
        let ani_per60 = ani_1type_progress*60  
        let ani_per30 = ani_1type_progress*30
        let ani_per08 = 1-(ani_1type_progress*0.2)
        let ani_per1 = ani_1type_progress*1
        let ani_per580 = ani_1type_progress*580
        ////////////////////////////////////


 
        //도달하지 못한 상황
        if(distance<0){
            $(".audioElv_tab").removeClass("fixed").removeClass("bottom")
        }

        //엘리베이터 진행중인 상황
        if(distance>=0 && distance<aniLength){
            $(".audioElv_tab").addClass("fixed").removeClass("bottom")
            if(ani_1type_idx==0){
                $(".headphoneFrame_tab").css("transform",`translate(${-ani_per60}px, ${ani_per30}px)scale(${ani_per08})`)
                $(".headphoneImg_tab").css("filter",`brightness(${ani_per08})`)

            }
            else if(ani_1type_idx==1){
                $(".soundImg_tab").css("opacity",ani_per1)
                
            }
            if(ani_1type_idx==1){
                $(".soundtxtStation_tab").addClass("on")
                $(".soundtxtTrain_tab").css("transform",`translateY(${-ani_per580}px)`)
            }else if(ani_1type_idx==0){
                $(".soundtxtStation_tab").removeClass("on")
            }
            

        }

        //엘리베이터를 지나친 상황
        if(distance>aniLength){
            $(".audioElv_tab").removeClass("fixed").addClass("bottom")
        }

    })

   


    // 텍스트 효과

    $(window).scroll(function(){
        let scrTop = 0
        let devHeight = $(window).height()
        scrTop = $(this).scrollTop()
        $(".designContent>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".prototype>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".visor>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".noiseCancelling>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".noiseEffect").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".titleFrame>.txtframe>p").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".batterytxtTrain>li").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })
        $(".soundImg_mobile").each(function(){
            if(scrTop > $(this).offset().top - devHeight*0.7){
                $(this).addClass("on")    
            }else{$(this).removeClass("on")}
        })



    })



    // -----------------------------------------------
    let tab_count = 0
    $(".tabTitle").click(function(){
        tab_count = ($(this).index())/2
        if(tab_count>2){tab_count=0}
        $(".tabImgTrain>li").removeClass("on")
        $(".tabImgTrain>li").eq(tab_count).addClass("on")
        

         // 클릭된 tabTitle의 open 클래스를 토글
         if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".tabTxt").eq(tab_count).removeClass("on");
        } else {
            $(".tabTitle").removeClass("open");
            $(this).addClass("open");

            $(".tabTxt").removeClass("on");
            $(".tabTxt").eq(tab_count).addClass("on");
        }

    })

    let tab_count2 = 0
    $(".tab_title").click(function(){
        tab_count2 = ($(this).index())/2
        if(tab_count2>2){tab_count2=0}
        if ($(this).hasClass("open")){
            $(this).removeClass("open");
            $(".tabFrame").eq(tab_count2).removeClass("on");
        } else {
            $(".tab_title").removeClass("open");
            $(this).addClass("open");
            $(".tabFrame").removeClass("on");
            $(".tabFrame").eq(tab_count2).addClass("on");
        }
    })


    // 팝업 슬라이드
    $(".contentTxtframe>.subContents_btn").click(function(){
        $(".modal").addClass("on")
        $(".contentPopup").addClass("on")
        $("body").addClass("on")
    })
    $(".popup_close").click(function(){
        $(".modal").removeClass("on")
        $(".contentPopup").removeClass("on")
        $("body").removeClass("on")
    })
    var popup_swiper = new Swiper(".popupStation", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            780: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            980: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    })

   

















});