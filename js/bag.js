$(function(){

    let count = 1 //상품개수
    let url = new URL(location.href);
    let urlParams = url.searchParams;
    let idx = urlParams.get('pd')

    $(".wrap").html(`<div class="hero">
    <div class="inner_content">
        <h1>장바구니 총액: ${formatToKoreanWon(product[idx].pPrice)}</h1>
        <a href="./payment.html" class="payBtn">결제</a>    
    </div>
</div>
<div class="quantity">
    <div class="inner_content">
        <ul class="productList">
            <li>
                <img src="./img/${product[idx].pImgsrc}" alt="${product[idx].pName}">
            </li>
            <li>${product[idx].pName} ${product[idx].pColor}</li>
            <li>
                <button class="btn_minus">-</button>
                <span id="count">1</span>
                <button class="btn_plus">+</button>
            </li>
            <li id="price1">${formatToKoreanWon(product[idx].pPrice*count)}</li>
        </ul>
        <div class="priceList">
            <ul>
                <li>소계</li>
                <li id="price2">${formatToKoreanWon(product[idx].pPrice*count)}</li>
            </ul>
            <ul>
                <li>배송</li>
                <li>무료</li>
            </ul>
            <ul>
                <li>총계</li>
                <li id="price3">${formatToKoreanWon(product[idx].pPrice*count)}</li>
            </ul>
            <a href="./payment.html" class="payBtn">결제</a>
        </div>
    </div>
</div>`)


$(".btn_plus").click(function(){
    count++
    if(count>10){count=10}
    $("#count").html(count)
    $("#price1").html(formatToKoreanWon(product[idx].pPrice*count))
    $("#price2").html(formatToKoreanWon(product[idx].pPrice*count))
    $("#price3").html(formatToKoreanWon(product[idx].pPrice*count))

})
$(".btn_minus").click(function(){
    count--
    if(count<1){count=1}
    $("#count").html(count)
    $("#price1").html(formatToKoreanWon(product[idx].pPrice*count))
    $("#price2").html(formatToKoreanWon(product[idx].pPrice*count))
    $("#price3").html(formatToKoreanWon(product[idx].pPrice*count))

})















})