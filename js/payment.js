$(function(){

    let url = new URL(location.href);
    let urlParams = url.searchParams;
    let idx = urlParams.get('pd')
    let count = urlParams.get('pnt')
    console.log(idx,count)

    $("input").click(function(){
        $("input").removeClass("on")
        $(this).addClass("on")
    })

    $(".paymentList>button").click(function(){
        $(".paymentList>button").removeClass("on")
        $(this).addClass("on")
    })
    $(".credit").click(function(){
        $(".credit").html(`<img src="./img/credit_card_on.svg" alt="신용카드">신용카드`)
        $(".cash").html(`<img src="./img/cash.svg" alt="계좌이체">계좌이체`)
    })
    $(".cash").click(function(){
        $(".cash").html(`<img src="./img/cash_on.svg" alt="계좌이체">계좌이체`)
        $(".credit").html(`<img src="./img/credit_card.svg" alt="신용카드">신용카드`)
    })

    $(".order").html(`<div class="inner_content">
    <ul class="orderList">
        <li><img src="./img/${product[idx].pImgsrc}" alt="${product[idx].pName}"></li>
        <li>${product[idx].pName} ${product[idx].pColor}</li>
        <li>${count}개</li>
        <li class="blueColor">${formatToKoreanWon(product[idx].pPrice*count)}</li>
    </ul>
</div>`)










})