$(document).ready(function(){

    // 박스 슬라이드
    var swiper = new Swiper(".boxStation", {
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: true,
      });

    
    
    var swiper = new Swiper(".productStation", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: true,
    });

    // 텍스트 효과
    $(window).scroll(function(){
      let scrTop = 0
      let devHeight = $(window).height()
      scrTop = $(this).scrollTop()
      $(".ctrlTxt").each(function(){
          if(scrTop > $(this).offset().top - devHeight*0.7){
              $(this).addClass("on")    
          }else{$(this).removeClass("on")}
      })
  })

  $(window).scroll(function(){
    let scrTop = 0
    let devHeight = $(window).height()
    scrTop = $(this).scrollTop()
    $(".serviceSection").each(function(){
        if(scrTop > $(this).offset().top - devHeight*0.7){
            $(this).addClass("on")    
        }else{$(this).removeClass("on")}
    })
})


  $(".supportMenu>dt").click(function(){
    $(".supportMenu>dt").removeClass("on")
    $(this).addClass("on")
  })



})