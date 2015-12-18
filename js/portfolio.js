function getHeightofDiv()
{ var height_max=0;
  $(".iconbox").each(function(){
    height_max = $(this).innerHeight()>height_max?$(this).innerHeight():height_max;    
  });  
  return height_max;
}

function resizeIconboxDiv(height_max)
{ 
  $(".iconbox").each(function(){
    dif = height_max - $(this).innerHeight()+20;
    $(this).css( "padding-bottom", dif+"px" );    
  });  
  
}

(function($){

  $(window).load(function() {
      $('#status').fadeOut();
      $('#preloader').delay(300).fadeOut('slow');
    });
  $(document).ready(function() {
    /* ---------------------------------------------- /*
     * Smooth scroll / Scroll To Top
    /* ---------------------------------------------- */

    $('a[href*=#]').bind("click", function(e){
           
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
      } else {
        $('.scroll-up').fadeOut();
      }
    });

    /* ---------------------------------------------- /*
     * Navbar
    /* ---------------------------------------------- */

    $('.header').sticky({
      topSpacing: 0
    });

    $('body').scrollspy({
      target: '.header',
      offset: 70
    });

  
    $("#home").height($(window).height());

    $(window).resize(function(){
      $("#home").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#home').css({'background-attachment': 'scroll'});
    } else {
      $('#home').parallax('50%', 0.1);
    }
    //  resizing paddings
    height_max = getHeightofDiv();
    resizeIconboxDiv(height_max);
    
  });

})(jQuery);