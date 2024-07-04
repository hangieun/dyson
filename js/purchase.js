$(function(){

    let url = new URL(location.href);
    let urlParams = url.searchParams;
    let idx = urlParams.get('pd')
    console.log(idx)

    console.log(product[idx])

    $(".purchase").html(`<div class="inner_content">
    <figure class="productImg">
        <img src="./img/${product[idx].pImgsrc}" alt="${product[idx].pName}">
    </figure>
    <div class="productFrame">
        <h1>${product[idx].pName} 구입하기</h1>
        <div class="productIndex">
            <div class="priceFrame">
                <h1>${formatToKoreanWon(product[idx].pPrice)}</h1>
                <p class="blueColor">카드사 특별 혜택 자세히 보기</p>
            </div>
            <div class="delivery">
                <ul class="dvList">
                    <li>
                        <img src="./img/freebox.svg" alt="무료배송">
                        <p>무료 배송</p>
                    </li>
                    <li>
                        <img src="./img/receipt.svg" alt="현금영수증 발행">
                        <p>현금영수증 발행</p>
                    </li>
                    <li>
                        <img src="./img/truck.svg" alt="당일 출고">
                        <p>평일 오전 10시 이전<br>
                            주문 시 당일 출고</p>
                    </li>
                </ul>
            </div>
            <a href="./bag.html?pd=${product[idx].pId}" class="addBtn"><p>장바구니 담기</p></a>
            <div class="notify">
                <p>제품 관련 문의사항은<br>
                <span class="blueColor">1588-4253</span>또는 <span class="blueColor">help@kr.dyson.com</span>로 문의하세요.</p>
            </div>
        </div>
    </div>
</div>`)

$(".faq").html(`<div class="inner_content">
<h1>자주 묻는 질문</h1>
<dl class="faqList">
    <dt class="open">${product[idx].pFaq[0].q}</dt>
    <dd class="on">${product[idx].pFaq[0].a}</dd>
    <dt>${product[idx].pFaq[1].q}</dt>
    <dd>${product[idx].pFaq[1].a}</dd>
    <dt>${product[idx].pFaq[2].q}</dt>
    <dd>${product[idx].pFaq[2].a}</dd>
    <dt>${product[idx].pFaq[3].q}</dt>
    <dd>${product[idx].pFaq[3].a}</dd>
    <dt>${product[idx].pFaq[4].q}</dt>
    <dd>${product[idx].pFaq[4].a}</dd>
</dl>
</div>`)

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