$(function(){

    // 2섹션 슬라이드
    var swiper = new Swiper(".productStation", {
     
        breakpoints: {
              320: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
              },
              768: {
                  slidesPerView: 2.5,
                  spaceBetween: 15
              },
            
              1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 20
              }
          }
    
    });

    // 3섹션 슬라이드
    var swiper = new Swiper(".priceStation", {
        breakpoints: {
          320: {
              slidesPerView: 1.3,
              spaceBetween: 10
          },
          768: {
              slidesPerView: 2.5,
              spaceBetween: 15
          },
        
          1024: {
              slidesPerView: 3.2,
              spaceBetween: 20
          }
      }
    });

    //  4섹션 슬라이드
    let promoCount = 0
    $(".nextBtn").click(function(){
        promoCount++
        if(promoCount>3){promoCount=3}
        $(".promoTrain").css("transform",`translateX(${-25*promoCount}%)`)
    })
    $(".prevBtn").click(function(){
        promoCount--
        if(promoCount<0){promoCount=0}
        $(".promoTrain").css("transform",`translateX(${-25*promoCount}%)`)
    })
   

















})