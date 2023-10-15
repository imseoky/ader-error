$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
      loop : true,
      autoplay : {
          delay: 2000,
          disableOnInteraction: false,
          loopAdditionalSlides: 1
      },
      slidesPerView: 4,
      spaceBetween: 30,
      // centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1550: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 10,
        }, 
        375: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });

    $('.header-menu li').mouseenter(function(){
      let result = $(this).attr('data-alt');
      $('.sub-menu-d').removeClass('active');
      $(`#${result}`).addClass('active');

      $('.sub-menu').addClass('active');
    });

    $('.sub-menu-d').mouseleave(function(){
      $(this).removeClass('active');
    });

    $('.m-btn').click(function(){
      $('.m-btn span:nth-child(1)').toggleClass('active');
      $('.m-btn span:nth-child(2)').toggleClass('active');
      $('.m-btn span:nth-child(3)').toggleClass('active');

      $('.m-menu').toggleClass('active');
      $('.m-btn').toggleClass('active');
    });

    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      // console.log(sct);

      if(sct >= 900){
        $('.header-menu').addClass('active');
        $('.header-menu .menu li').addClass('active');
        $('.header-logo').addClass('active');
        $('.m-btn span').addClass('on');
      }else{
        $('.header-menu').removeClass('active');
        $('.header-menu .menu li').removeClass('active');
        $('.header-logo').removeClass('active');
        $('.m-btn span').removeClass('on');
      }
    });

    AOS.init();
});