$(document).ready(function() {
  $('body').scrollspy({ target: '#navbar-example' });
  $('[data-spy="scroll"]').each(function () {var $spy = $(this).scrollspy('refresh')});
  $(function() {
    $(window).scroll(function(){      
      $('.fadeInBlock').each(function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        // Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  
        bottom_of_window = bottom_of_window;  
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},2000);
        }
      }); 
    });
  });
  $(".navbar-brand").click(function(){
   console.log("clicked")
   $(window).scrollTo($(".cover"), 1000);
  })
  $("#ab").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#about"), 1000);
  })
  $("#ed").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#edu"), 1000);
  })
  $("#wo").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#work"), 1000);
  })
  $("#sk").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#skills"), 1000);
  })
  $("#pr").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#projects"), 1000);
  })
  $("#co").click(function(){
   console.log("clicked")
   $(window).scrollTo($("#contact"), 1000);
  })
});