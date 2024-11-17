$(window).scroll(function() {
    let scrolls = $(window).scrollTop();
    if(scrolls > 400){
        $('aside > .top').css({'opacity':'1','transition':'0.5s'});
    } else {
        $('aside > .top').css({'opacity':'0','transition':'0.5s'});
    };
    $('.main > .blur').animate({
        top:`-${scrolls / 2}px`
    },0);
    $('.main > h1').animate({
        top:`-${scrolls}px`
    },0);
    if(scrolls > 100){
        $('.am-title').css({'opacity':'1','transition':'1s'});
    } else {
        $('.am-title').css({'opacity':'0','transition':'1s'});
    }
    if(scrolls > 300){
        $('.am section').css({'opacity':'1','transition':'1s'});
    } else {
        $('.am section').css({'opacity':'0','transition':'1s'});
    }
    if(scrolls > 1000){
        $('.pf h2').css({'opacity':'1','transition':'1s'});
    } else {
        $('.pf h2').css({'opacity':'0','transition':'1s'});
    }
    if(scrolls > 1205){
        $('.pf section').css({'opacity':'1','transition':'1s'});
    } else {
        $('.pf section').css({'opacity':'0','transition':'1s'});
    }
    if(scrolls > 1950){
        $('.etc h2').css({'opacity':'1','transition':'1s'});
    } else {
        $('.etc h2').css({'opacity':'0','transition':'1s'});
    }
    if(scrolls > 2060){
        $('.etc section').css({'opacity':'1','transition':'1s'});
    } else {
        $('.etc section').css({'opacity':'0','transition':'1s'});
    }
});

$('.top').click(function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
});

$('.main > h1 > img').eq(0).stop().animate({
    top:200,
},2000,'easeOutBounce',function(){
    $(this).addClass('bounce');
});

$('.main > h1 > img').eq(1).stop().animate({
    top:350,
},2500,'easeInOutBounce',function(){
    $(this).addClass('bounce2');
});

$('.main > ul > li').eq(0).click(function(){
    $(window).scrollTop(0);
    $('.bar_1 > span').css('width','3px');
    $('.bar_2 > span').css('width','3px');
    $('.bar_3 > span').css('width','3px');
    location.reload();
});

$('.main > ul > li').eq(2).click(function(){
    $(window).scrollTop(920);
    $('.bar_1 > span').css('width','100%');
    $('.bar_2 > span').css('width','85%');
    $('.bar_3 > span').css('width','75%');
});

$('.main > ul > li').eq(4).click(function(){
    $(window).scrollTop(1840);
    $('.bar_1 > span').css('width','3px');
    $('.bar_2 > span').css('width','3px');
    $('.bar_3 > span').css('width','3px');
});

$('.main > ul > li').eq(6).click(function(){
    $(window).scrollTop(2760);
    $('.bar_1 > span').css('width','3px');
    $('.bar_2 > span').css('width','3px');
    $('.bar_3 > span').css('width','3px');
});

$(window).scroll(function(){
    let scrolls = $(window).scrollTop();
    if(scrolls < 622){
        $('.bar_1 > span').css('width','3px');
        $('.bar_2 > span').css('width','3px');
        $('.bar_3 > span').css('width','3px');
    } else if(scrolls > 1680){
        $('.bar_1 > span').css('width','3px');
        $('.bar_2 > span').css('width','3px');
        $('.bar_3 > span').css('width','3px');
    } else if (920 < scrolls < 1840){
        $('.bar_1 > span').css('width','100%');
        $('.bar_2 > span').css('width','85%');
        $('.bar_3 > span').css('width','75%');
    }
});

const bullet = ['Neoteria', '데싱디바', 'Sanrio'];
let pfSwiper = new Swiper(".pf-con", {
    slidesPerView: 1,
    effect:'fade',
    loop: true,
    loopAdditionalSlides: 0,
    speed:1000,
    autoplay: false,
    pagination: {
      el: ".pf-pg",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
    },
});

$('.etc .bg3').click(function(){
    $(window).scrollTop(2760);
    $('.etc3').css({'display':'flex'});
    $('body').css('overflow','hidden');
    $(document).mouseup(function (e){
        $('body').css('overflow','visible');
        let etc3 = $(".etc3");
        if(etc3.has(e.target).length === 0){
          etc3.css("display",'none');
        }
    });
    return false;
});

$('.process1').click(function(){
    $(window).scrollTop(1838);
    $('.pf1').css({'display':'block'});
    $('body').css('overflow','hidden');
    $(document).mouseup(function (e){
        $('body').css('overflow','visible');
        let pf1 = $(".pf1");
        if(pf1.has(e.target).length === 0){
          pf1.css("display",'none');
        }
    });
});
$('.process2').click(function(){
    $(window).scrollTop(1838);
    $('.pf2').css({'display':'block'});
    $('body').css('overflow','hidden');
    $(document).mouseup(function (e){
        $('body').css('overflow','visible');
        let pf2 = $(".pf2");
        if(pf2.has(e.target).length === 0){
          pf2.css("display",'none');
        }
    });
});
$('.process3').click(function(){
    $(window).scrollTop(1838);
    $('.pf3').css({'display':'block'});
    $('body').css('overflow','hidden');
    $(document).mouseup(function (e){
        $('body').css('overflow','visible');
        let pf3 = $(".pf3");
        if(pf3.has(e.target).length === 0){
          pf3.css("display",'none');
        }
    });
});