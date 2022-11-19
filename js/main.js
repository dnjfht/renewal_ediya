$(document).ready(function(){

//new Swiper(선택자, 옵션)
//new Swiper('.notice-line .swiper-container', {
    //direction: 'vertical',
    //autoplay: true,
    //loop: true
//});

var swiper = new Swiper(".notice-line .mySwiper", {
    direction: "vertical",
    autoplay: true,
    loop: true
});

var swiper = new Swiper(".line-notice .mySwiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});


new Swiper(".promotion .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay: true,
    delay: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
});

//이디아 프로모션 숨기기 아밴트
var i = 0;

$('.toggle-promotion>.material-icons').click(function(){

    if(i == 0) {
        $('.promotion').animate({
            height:595
        });
        i++;
    }else if(i == 1) {
        $('.promotion').animate({
            height:0
        });
        i=0;
    }
});

//796px verson
$('.btn_prom').click(function(){

  if(i == 0) {
      $('.promotion').animate({
          height:595
      });
      i++;
  }else if(i == 1) {
      $('.promotion').animate({
          height:0
      });
      i=0;
  }
});



new Swiper("#new_menu_list .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay: true,
    delay: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
});

new Swiper("#best_menu_list .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay: true,
    delay: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
});


new Swiper("#m_new_menu_list .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: true,
  delay: 5000,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
});

new Swiper("#m_best_menu_list .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: true,
  delay: 5000,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
});


new Swiper("#m_new_menu_list_2 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: true,
  delay: 5000,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
});

new Swiper("#m_best_menu_list_2 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: true,
  delay: 5000,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
});



//mobile sub_menu

$('#m_util>li:nth-child(3)').click(function(){
    
  $('#sub_menu_wrap').css({
      display:'block'
  });
});


$('#sub_menu_close').click(function(){
    
    $('#sub_menu_wrap').css({
        display:'none'
    });
});


$('#main>li:nth-child(1)>a').click(function(){
    
  if(i == 0) {
    $('#depth_1').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_1').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(2)>a').click(function(){
    
  if(i == 0) {
    $('#depth_2').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_2').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(3)>a').click(function(){
    
  if(i == 0) {
    $('#depth_3').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_3').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(4)>a').click(function(){
    
  if(i == 0) {
    $('#depth_4').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_4').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(5)>a').click(function(){
    
  if(i == 0) {
    $('#depth_5').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_5').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(6)>a').click(function(){
    
  if(i == 0) {
    $('#depth_6').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_6').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});

$('#main>li:nth-child(7)>a').click(function(){
    
  if(i == 0) {
    $('#depth_7').css({
        display:'block'
    });
    $(this).addClass('on');
    i++;
  }else if(i == 1) {
    $('#depth_7').css({
        display:'none'
    });
    $(this).removeClass('on');
    i=0;
  }

});


});