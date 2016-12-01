jq = jQuery.noConflict();

jq(function($){

 $('#content').load('home.html');

$('a').on('click mouseenter', function(){
    $(this).css("color", "red");
});

$('a').on('mouseleave', function(){
    $(this).css("color", "white");
});

$('ul li a').on('click', function(){
  var $this =  $(this),
  target = $this.data('target'); console.log("target: " + target);

  $('#content').load(target + '.html');
  return false;

  if (target == "about"){
   $("wrapper").css("height", "1400px");
   $("content").css("height", "1200px")
  }
});


});
