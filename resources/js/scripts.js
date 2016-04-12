
$(document).ready(function() {
  $(document).on("scroll", onScroll); 
    

//  $(window).onresize(function() {
//    if ($("#acerca-div").outerHeight() > $(window).height() ) {
//      $("#acerca").css("height",$("#acerca-div").outerHeight());
//      console.log($("#acerca").outerHeight());
//    } else {
//      $("#acerca").css("height","100%");
//    };
//
//  });
  //smoothscroll
  
  $('#toTop').click().animate({
      'scrollTop': $window.offset().top
    }, 10000, 'swing', function() {
      $(document).on("scroll", onScroll);
    });
  
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('actives');
    })
    $(this).addClass('actives');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 1
    }, 500, 'swing', function() {
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("actives");
      currLink.addClass("actives");

    } else {
      currLink.removeClass("actives");
    }
  });
}
