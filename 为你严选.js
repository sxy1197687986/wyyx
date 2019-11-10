$(".header").load("./网易严选头部.html")
$(".footer").load("./网易严选尾部.html")


var swiper = new Swiper('#swp', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(".tabItem").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
   $(".mainCont").eq($(this).index()).addClass("show").siblings().removeClass("show")
})

var open =true
$(".sideBar").click(function(){
    if(open==true){
        $(".sideCont").animate({ 
            right:"0"
          }, 1000 );
        open =false
    }else{
        $(".sideCont").animate({ 
            right:"-320"
          }, 1000 );
        open =true
    }
})