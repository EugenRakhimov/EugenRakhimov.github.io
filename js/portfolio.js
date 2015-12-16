(function($){

  $(window).load(function() {
      $('#status').fadeOut();
      $('#preloader').delay(300).fadeOut('slow');
    });
  $(document).ready(function() {
  
    $("#home").height($(window).height());

    $(window).resize(function(){
      $("#home").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#home').css({'background-attachment': 'scroll'});
    } else {
      $('#home').parallax('50%', 0.1);
    }
  });

})(jQuery);