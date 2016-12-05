jq = jQuery.noConflict();

jq(function($){

 $('#wrapper').load('home.html');

$('a').on('click mouseenter', function(){
    $(this).addClass("active");
});

$('a').on('mouseleave', function(){
    $(this).removeClass("active");
});

$('ul li a').on('click', function(){
  var $this =  $(this),
  target = $this.data('target'); console.log("target: " + target);

  $('#wrapper').load(target + '.html');
  return false;
});


});
