let img_src = [
    './assets/images/s1.png',
    './assets/images/s2.png',
    './assets/images/s3.png',
    './assets/images/s4.png',
    './assets/images/s5.png',
    './assets/images/s6.png',
    './assets/images/s7.png',
];
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 


//IE < 10 pollify for requestAnimationFrame
window.requestAnimFrame = function(){
  return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback){ callback() }
}();




$(document).ready(function () {

// Include images



// Name images included
let image_type = img_src.map(function(cuurentEl, index){ return "image" + index});

// Configure particles-js
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": img_src.length, // No of images
        "density": {
          "enable": true,
          "value_area": 1000 // Specify area (Lesser is greater density)
        }
      },
      "color": {
        "value": "#5affd4"
      },
      "shape": {
        "type":  image_type, // Add images to particle-js
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 1, // Adjust opactiy
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 32, // Adjust the image size
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 20,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 0.5,   // Speed of particle motion
        "direction": "top",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);




    var chapterHeaderFirst = 2;
    var chapterHeaderSecond = 4;
    var chapterHeaderThird = 5;
    var chapterHeaderFourth = 6;
    
    

  
    var page = new FullPage("#main",{

        // section selector
        section: '.section.act',
    
        // animation options
        animationDuration: 700,
        animationTiming: 'ease',
        animationTranform: 'transform',
        // enable side navigation
        pagination: true,
    
        // enable keyboard navigation
        keyboard: true,
    
        // enable touch events
        touch: true,
    
        // touch limit in ms
        touchLimit: 100,
    
        // infinite loop
        loop: false,
    
        // callbacks
        onLeave: function(index,direction) {
          console.log(index);
          console.log("=> "+direction);
          
          if(index==chapterHeaderFirst && direction=="down")
          {
            
            $("#chapter-number-1").addClass("active-2");

          }else{

            $("#chapter-number-1").removeClass("active");
          }

          if(index==chapterHeaderFirst+1 && direction=="up")
          {

            $("#chapter-number-1").removeClass("active-2");
            $("#chapter-number-1").addClass("active");
          }



          if(index==chapterHeaderSecond && direction=="down")
          {
            $("#chapter-number-1").removeClass("active-2");
          
            $("#chapter-number-1").addClass("active");
           



          }else{

            $("#chapter-number-1").removeClass("active");
          }

          if(index==chapterHeaderSecond+1 && direction=="up")
          {

            $("#chapter-number-1").removeClass("active");
            $("#chapter-number-1").addClass("active-2");

          }
          if(index==chapterHeaderSecond && direction =="down")
          {

            $("#chapter-number-1").attr('src', 'assets/images/2.png');
          }
          
          if(index==chapterHeaderSecond+1 && direction =="up")
          {
            
            $("#chapter-number-1").attr('src', 'assets/images/1.png');
          
          }


          if(index==chapterHeaderThird+1 && direction =="up")
          {
            
            $("#chapter-number-1").addClass("active");
            $("#chapter-number-1").attr('src', 'assets/images/2.png');
          
          }
          if(index==chapterHeaderFourth+1 && direction =="up")
          {
            
            $("#chapter-number-1").addClass("active");
            $("#chapter-number-1").attr('src', 'assets/images/3.png');
          
          }
          
          if(index==chapterHeaderFourth+1 && direction=="down")
          {
          
            $("#chapter-number-1").removeClass("active");
            $("#chapter-number-1").addClass("active-2");
          
          }
          else if(index==chapterHeaderFourth+2 && direction=="up")
          {
          
            $("#chapter-number-1").removeClass("active-2");
            $("#chapter-number-1").addClass("active");
          
          }
           



          




        },
      
        afterLoad: function(index) {
          console.log(index);
          if(index===chapterHeaderFirst)
          {
            // alert("yow");
            
            $("#chapter-number-1").addClass("active");
          }else if(index == chapterHeaderSecond)
          {
         
            // $("#chapter-number-1").attr('src', 'assets/images/2.png');

          }else if(index == chapterHeaderThird+1)
          {
            $("#chapter-number-1").attr('src', 'assets/images/3.png');
            $("#chapter-number-1").addClass("active");
            
          }
          else if(index == chapterHeaderFourth+1)
          {
            $("#chapter-number-1").attr('src', 'assets/images/4.png');
            $("#chapter-number-1").addClass("active");
            
          }


      
        }
        
    });

    $(".slide-navigation").append("<li class='custom-nav first'><img width='18px' src='assets/images/share.svg'></li>");
    $(".slide-navigation").append("<li class='custom-nav'><img width='18px' src='assets/images/download.svg'></li>");

    if($(window).width() < 1000)
    { 
      // Buttons and events
      $('.single-item').slick({
        dots: true,
      });
    }

    var swiperDragged = false,
    startX,
    endX = 0;

    var starXGlobal = 0;
    var lastXGlobal = 0;
    var $currentbtn;  
function swipe(){
  var $swipe = $('.swipe-area'),
      $btn = $('.swipe-button');
 


  // TweenLite.to('#swipe-arrow', 0, { x: 16, y: 11});
  // TweenLite.to('#swipe-end', 0, { x: 235, y: 12});
  
  $btn.on('click touchend', function(e){
    e.preventDefault();
  }).on('touchstart mousedown', function(e) {
    e.preventDefault();
    $currentbtn = $(this);
    swiperDragged = true;
    startX = typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX;
    starXGlobal = startX;
    endX = 0;
  })

  $(document).on('touchmove mousemove', function(e){
    if (swiperDragged) {
      actualX = typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX;
      endX = Math.max(0, Math.min(160, actualX - startX));
      TweenLite.to($currentbtn, 0, { x: endX});
      
      console.log(endX);
      
      // to be changed to functions here
      
      
      var panelx = ((endX/160) * 100)-100 ; 
      showContent($currentbtn,panelx,$currentbtn.attr("target"));
      // $(".chapter-more-content").css("left",panelx+"%");
      // $(".chapter-more-content").css("bottom",panelx+"%");

      // $(".content-main-wrapper").css("margin-left", -(100+panelx) / 2.5 +"%");
      // $("#chapter-number-1").css("opacity",1-((100+panelx)/100)*2);
      
      
      
      
      




      if(actualX >= 180)
      {
        
        console.log("uuuuuunlocked");
        return;
      }
    }
  }).on('touchend mouseup', function(e) {
    if (swiperDragged) {
      swiperDragged = false;
      if (endX < 160) {
        TweenLite.to($currentbtn, .5,  { x: 0,onUpdate:hideContent });
        lastXGlobal = $currentbtn.x;
      
      

      } else {
        
        disableScroll();


        console.log("uunlocked");
        TweenLite.to($currentbtn, .1, { x: 160});
        // $('.unlock').addClass('unlocked');
        setTimeout(function(){
          TweenLite.to($currentbtn, .5, { x: 0 });
          // $('.unlock').removeClass('unlocked');
        }, 1400);
      }
      endX = 0;
    }
  });
}
function update() {

  // var endX = Math.max(0, Math.min(160, $('.swipe-button').position().left - lastXGlobal));
  // var panelx = ((endX/160) * 100)-100 ; 
  // console.log("=>>>"+panelx);
  var panelx = (($('.swipe-button').position().left/160) * 100)-100 ; 
  console.log("=>>>==="+panelx);
  $(".chapter-more-content").css("left",panelx+"%");
  $(".chapter-more-content").css("bottom",panelx+"%");
  $(".content-main-wrapper").css("margin-left", -(100+panelx) / 2.5 +"%");
  $("#chapter-number-1").css("opacity",1-((100+panelx)/100)*2+"" );
  
}


function showContent(currentButton,panelx,number) {
  
  if ($(window).width() < 769)
  {
    $("."+currentButton.attr("id")).css("left",panelx+"%");
    $("."+currentButton.attr("id")).css("bottom",panelx+"%");
    
    $("."+currentButton.attr("id")+"-wrapper").css("margin-top", (100+panelx) /6 +"%");
    $("."+number+"").attr('style', 'opacity: '+(1-((100+panelx)/100)*2)+' !important');

  }else{

    $("."+currentButton.attr("id")).css("left",panelx+"%");
    $("."+currentButton.attr("id")).css("bottom",panelx+"%");
    
    $("."+currentButton.attr("id")+"-wrapper").css("margin-left", -(100+panelx) / 2.5 +"%");
    $("."+number+"").attr('style', 'opacity: '+(1-((100+panelx)/100)*2)+' !important');
  }
  
  
}
function hideContent() {
  
  var panelx = (($currentbtn.position().left/160) * 100)-100 ; 
  $("."+$currentbtn.attr("id")).css("left",panelx+"%");
  $("."+$currentbtn.attr("id")).css("bottom",panelx+"%");
  
  $("."+$currentbtn.attr("id")+"-wrapper").css("margin-left", -(100+panelx) / 2.5 +"%");
  // $("#chapter-number-1").css("opacity",1-((100+panelx)/100)*2+" !important");
  $("#chapter-number-1").attr('style', 'opacity: '+1-((100+panelx)/100)*2+' !important');
  
}


swipe();


function disableScroll() {

  // $(".chapter-more-content").css("display","block");
  page.settings.isOn = false ;
}


    

});