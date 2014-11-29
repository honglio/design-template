$(function() {
  // Disable link clicks to prevent page scrolling
  $('a[href="#fakelink"]').on('click', function (e) {
    e.preventDefault();
  });

  // Make pagination demo work
  $(".pagination a").on('click', function() {
    $(this).parent().siblings("li").removeClass("active").end().addClass("active");
  });

  // Tabs
  $(".nav-tabs a").on('click', function (e) {
    e.preventDefault();
    $(this).tab("show");
  })

  // Placeholders for input/textarea
  if($.placeholder) {
    $("input, textarea").placeholder();
  }

  $(".btn-group a").on('click', function() {
    $(this).siblings().removeClass("active").end().addClass("active");
  });

  // Focus state for append/prepend inputs
  $('.input-group').on('focus', '.form-control', function () {
    $(this).closest('.form-group, .navbar-search').addClass('focus');
  }).on('blur', '.form-control', function () {
    $(this).closest('.form-group, .navbar-search').removeClass('focus');
  });

  //Scroll Up
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    scrollDistance: 300, // Distance from top/bottom before showing element (px)
    scrollFrom: 'top', // 'top' or 'bottom'
    scrollSpeed: 300, // Speed back to top (ms)
    easingType: 'linear', // Scroll to top easing (see http://easings.net/)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element, can contain HTML
    scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
    scrollImg: true, // Set true to use image
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 2147483647 // Z-Index for the overlay
  });

  // Destroy scrollUp example
  //- $('.destroy').click(function () {
  //-     $.scrollUp.destroy();
  //- })

  // functional Switch Style
  function switchStylestyle(styleName) {
    $('link[rel*=style][title]').each(function(i) {
      this.disabled = true;
      if ( this.getAttribute('title') == styleName ) this.disabled = false;
    });
    createCookie('style', styleName, 365);
  }

  $('.styleswitch').click(function() {
    switchStylestyle(this.getAttribute("rel"));
    return false;
  });
  var c = readCookie('style');
  if (c) switchStylestyle(c);

  // Switcher animation
  $('.demo_changer .demo-icon').click(function(){

    if($('.demo_changer').hasClass("active")){
      $('.demo_changer').animate({"left":"-180px"},function(){
        $('.demo_changer').toggleClass("active");
      });
    }else{
      $('.demo_changer').animate({"left":"0px"},function(){
        $('.demo_changer').toggleClass("active");
      });
    }
  });
});

// Cookie functions for style switcher
function createCookie(name,value,days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++)
  {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name)
{
  createCookie(name,"",-1);
}
