$(window).scroll(function() {
    let scrolls = $(window).scrollTop();
    if(scrolls > 400){
        $('aside > .top').css('display','flex');
    } else {
        $('aside > .top').css('display','none');
    }
    let scrollTop = $(window).scrollTop();
    $('.main > .blur').animate({
        top:`-${scrollTop / 2}px`
    },0)
    $('.main > h1 > img').eq(0).animate({
        top:`-${scrollTop}px`
    },0)
    $('.main > h1 > img').eq(1).animate({
        bottom:`${scrollTop}px`
    },0)
  });
$('.top').click(function(){
    $(window).scrollTop(0);
})
$('.main > h1 > img').eq(0).stop().animate({
    top:0,
},1500,'easeOutBounce')
$('.main > h1 > img').eq(1).stop().animate({
    bottom:0,
},2000,'easeOutBounce')

$('.main > ul > li').eq(0).click(function(){
    $(window).scrollTop(0);
    $('.bar_1 > span').css('width','3px')
    $('.bar_2 > span').css('width','3px')
    $('.bar_3 > span').css('width','3px')
    location.reload();
})
$('.main > ul > li').eq(2).click(function(){
    $(window).scrollTop(920);
    $('.bar_1 > span').css('width','150px')
    $('.bar_2 > span').css('width','135px')
    $('.bar_3 > span').css('width','120px')
})
$('.main > ul > li').eq(4).click(function(){
    $(window).scrollTop(1840);
    $('.bar_1 > span').css('width','3px')
    $('.bar_2 > span').css('width','3px')
    $('.bar_3 > span').css('width','3px')
})
$('.main > ul > li').eq(6).click(function(){
    $(window).scrollTop(2760);
    $('.bar_1 > span').css('width','3px')
    $('.bar_2 > span').css('width','3px')
    $('.bar_3 > span').css('width','3px')
})
$(window).scroll(function(){
    let scrolls = $(window).scrollTop();
    if(scrolls < 622){
        $('.bar_1 > span').css('width','3px')
        $('.bar_2 > span').css('width','3px')
        $('.bar_3 > span').css('width','3px')
    } else if(scrolls > 1680){
        $('.bar_1 > span').css('width','3px')
        $('.bar_2 > span').css('width','3px')
        $('.bar_3 > span').css('width','3px')
    } else if (920 < scrolls < 1840){
        $('.bar_1 > span').css('width','150px')
        $('.bar_2 > span').css('width','135px')
        $('.bar_3 > span').css('width','120px')
    }
})