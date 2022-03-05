// 각 항목 열기 / 닫기 - 효과 자유
/* 실습
$('.open1').on({'click':function(){
    $(this).parent().next().stop().slideDown();
}});
$('.close1').on('click',function(){
    $(this).parent().next().stop().slideUp();
}); */
//확인
$('.open1').click(function(){
    $(this).parent().next().stop().show();
});
$('.close1').click(function(){
    $(this).parent().next().stop().hide();
});

// 모두 열기 / 모두 닫기
/* 실습
$('.all_open').on('click',function(){
    $('article>.content').stop().slideDown();
});
$('.all_close').on('click',function(){
    $('article>.content').stop().slideUp();
}); */
// 확인
$('.all_open').click(function(){
    $('article p').stop().slideDown();
});
$('.all_close').click(function(){
    $('article p').stop().slideUp();
});