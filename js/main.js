//모바일 크기로 새창 띄우기
function MobileOpen1(){
  window.open('https://diwktn062.cafe24.com/01/mobile%20miso/','responsible1','width=400; height=800; top=280; left=800');
};

function MobileOpen2(){
    window.open('https://diwktn062.cafe24.com/01/15_asanMedical/','responsible1','width=470; height=800; top=280; left=800');
  };
function MobileOpen3(){
  window.open('https://diwktn062.cafe24.com/01/09_KIA_bongo/','responsible1','width=470; height=800; top=280; left=800');
};
// window.open("주소,"팝업이름","속성");


$(document).ready( function(){

  $('.btn1').click(function(){
      $('html').stop().animate({scrollTop:0},2000);
  });
  $('.btn2').click(function(){
      $('html').stop().animate({scrollTop:1200},2000);
  });
  $('.btn3').click(function(){
      $('html').stop().animate({scrollTop:2300},2000);
  });
  $('.btn4').click(function(){
      $('html').stop().animate({scrollTop:4400},2000);
  });
  $('.btn5').click(function(){
      $('html').stop().animate({scrollTop:6450},2000);
  });


    //스크롤 시 섹션의 위치를 판단하여 클라스 on 추가
    $(window).scroll(function(){
      var ypos = $(window).scrollTop();

      //A.scrollTop() : A가 스크롤 된 거리(위쪽부터)
      
      if(ypos < 1200){
          $("#nav li").removeClass("on");
          $("#nav li").eq(0).addClass("on");
      }
      else if (ypos >= 1200 && ypos< 2300){
          $("#nav li").removeClass("on");
          $("#nav li").eq(1).addClass("on");
      }
      else if (ypos >= 2300 && ypos < 4400){
          $("#nav li").removeClass("on");
          $("#nav li").eq(2).addClass("on");
      }
      else if (ypos >= 4400 && ypos < 6450){
          $("#nav li").removeClass("on");
          $("#nav li").eq(3).addClass("on");
      }
      else {
          $("#nav li").removeClass("on");
          $("#nav li").eq(4).addClass("on");
      }
  });


} );
   
  
