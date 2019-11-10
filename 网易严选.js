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
for (i = 0; i < swiper.pagination.bullets.length; i++) {
   swiper.pagination.bullets[i].onmouseover = function () {
      this.click();
   };
}
swiper.el.onmouseover = function () {
   swiper.autoplay.stop();
}
swiper.el.onmouseout = function () {
   swiper.autoplay.start();
}

var swiper1 = new Swiper('#swp1', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper = new Swiper('#swp2', {
   zoom: true,
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
});

var swiper = new Swiper('#swp4', {
   zoom: true,
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper = new Swiper('#swp5', {
   zoom: true,
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper = new Swiper('#swp6', {
   zoom: true,
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper12 = new Swiper('.swiper12', {
   autoplay: {
      // 延时时间
      delay: 2000,
      /* 
      用户操作swiper之后，是否禁止autoplay。默认为true：停止。
      如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
      操作包括触碰，拖动，点击pagination等。
      */
      disableOnInteraction: false,
   },
   slidesPerView: 3,
   spaceBetween: 6,
   navigation: {
      nextEl: '.next12',
      prevEl: '.prev12',
   },
   loop: true,
})
$('#next').click(() => {
   $('.prev12').click()
})
$('#prev').click(() => {
   $('.next12').click()
})
swiper12.el.onmouseover = function () {
   swiper12.autoplay.stop();
}
swiper12.el.onmouseleave = function () {
   swiper12.autoplay.start();
}
  
  
  $(".item").click(function () {
    $(this).addClass("active").siblings().removeClass("active")

   $(".showContainer").eq($(this).index()).addClass("show").siblings().removeClass("show")
})
