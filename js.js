$(document).ready(
  function() {
    $('.menu-toggle').click(function() {
      $('nav').toggleClass('active')
    })
    $('ul li').click(function() {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })
  }
)

var $h = $(window);
var height = $h.height();
var prevScrollpos = window.pageYOffset,
    $h = $(window),
    height = $h.height();
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if ($(this).scrollTop() > height ) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-5vw";
    }
    prevScrollpos = currentScrollPos;
  }
}

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('header').addClass('nav-after');
            $('header nav ul li ul').addClass('sub-aft');
            $('header nav ul li ul a').addClass('sub-a-aft');
            $('#ye-sub').addClass('ye-sub');
      }

      else {
            $('header').removeClass('nav-after');
            $('header nav ul li ul').removeClass('sub-aft');
            $('header nav ul li ul a').removeClass('sub-a-aft');
            $('#ye-sub').removeClass('ye-sub');
      }
})
