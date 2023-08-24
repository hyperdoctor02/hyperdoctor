 
 //1.풀페이지 스크롤
$(function(){
    $('#fullpage').fullpage({
          autoScrolling:true,
          scrollHorizontally: true,
          fingersonly: true,
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
			menu: '.rightNav',
    });
});
 
 
 
 //스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
  });

  
//3.splitting 애니메이션(
    $(function(){ Splitting(); });


  //사업영역 slide
    $(function(){
       //사업영역
       $(".list").slick({   
        arrows: false, 
        dots: true, 
        autoplay: false, //자동재생   
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000, 
        pauseOnHover:true, //호버시 멈추도록 true로 바꿔줌
        pauseOnFocus:true //호버시 멈추도록 true로 바꿔줌
    });
    $(".list #slick-slide-control1").text("온라인 제작");
    $(".list #slick-slide-control2").text("병의원 커뮤니티 제작");
    $(".list #slick-slide-control3").text("온라인개발");
    $(".list #slick-slide-control4").text("가맹점사업");
    $(".list #slick-slide-control5").text("병의원 운영교육");
    $(".list #slick-slide-control6").text("영상제작");
    
    });
   