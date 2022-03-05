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
            text.eq(i).css({color:"#0b5ff4"}); 
        }else{
            text.eq(i).removeClass('active');
            $('.addarea'+i).hide();
        }
    }

}
