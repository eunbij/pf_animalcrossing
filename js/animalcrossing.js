$(function(){
    $('.gnb a').click(function(e){
        e.preventDefault();
        $(window).scrollTo(this.hash||0,500);
    });
    $('.top').click(function(e){
        $('html,body').stop().animate({scrollTop:0},1000,'swing');
        e.preventDefault();
    });
    var SA = 100;
    $(window).scroll(function(){
        var num = $('html,body').scrollTop();
        console.log(num);
        if(num>=SA){
            $('aside div').stop().fadeIn();
        }else{
            $('aside div').stop().fadeOut();
        }
    });
});