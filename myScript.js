jq = jQuery.noConflict();

jq(function($){

$('a').on('click mouseenter', function(){
    $(this).css("color", "red");
});

$('a').on('mouseleave', function(){
    $(this).css("color", "#222222");
});

$('ul li a').on('click', function(){
  var $this =  $(this),
  target = $this.data('target'); console.log("target: " + target);

  $('#content').load(target + '.php');
  return false;
});

});
