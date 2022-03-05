// DOM 객체 할당 video, btn -> 각각의 아이디값
var video = $('#ac_video');
var btn = $('#play_btn');
console.log(video);
console.log(btn);
// 이벤트 연결
$('#play_btn i').css({color: 'rgba(53, 121, 244, 1)'});
btn.click(function(){
    //초기 상태 => Video(paused) / Button(Play)
    if(video.get(0).paused){
        //play() : Video Play
        video.get(0).play();
        video.prop('muted', false);
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{ // Video가 playing 상태면
        //pause() : Video Pause
        video.get(0).pause();
        video.prop('muted', true);
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
        $('#play_btn i').css({color: 'rgba(53, 121, 244, .5)'});
    }
});

let text = $('.about_us .subtitle').find('li');
console.log(text.length);
let i = 0;
function addarea(num){
    // console.log(num);
    for(i=0;i<text.length;i++){
        if(num==i){
            text.eq(i).addClass('active');
            $('.addarea'+i).show();
            text.eq(i).siblings('li').css({color:'#000'});
            text.eq(i).css({color:"#f8d875"}); 
        }else{
            text.eq(i).removeClass('active');
            $('.addarea'+i).hide();
        }
    }

}

$('.card_box_info a, .about_us_contents a, .newlife ul li a').on('click',function(e){
    e.preventDefault();
});
// $('').on("click",function(e){
//     e.preventDefault();
// });


$('.newlife ul li a').on('click',function(){
    if($(this).next().css('display')=='none'){
        $(this).next().stop().slideDown();
        $(this).children('i').removeClass('fa-plus').addClass('fa-minus')
    }else{
        $(this).next().stop().slideUp();
        $(this).children('i').removeClass('fa-minus').addClass('fa-plus');
    }  
});
