$(document).ready(function() {
  var menu = $('nav');
  var menu_offset = menu.offset();
    
  $(window).on('scroll', function() {
      
        if($(window).scrollTop() > menu_offset.top) {
          menu.addClass('menu-fijo');
        $("#fb-gray").fadeIn();
            
        } else {
            menu.removeClass('menu-fijo');
             $("#fb-gray").fadeOut();
        }
  });
    
});

