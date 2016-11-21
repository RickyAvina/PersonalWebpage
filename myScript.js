jq = jQuery.noConflict();

jq(function($){

$('a').on('click mouseenter', function(){
    $(this).css("color", "red");
});

$('a').on('mouseleave', function(){
    $(this).css("color", "#222222");
});

});
