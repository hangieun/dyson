function formatToKoreanWon(number) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format( number);
}