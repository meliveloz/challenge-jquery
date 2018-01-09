$(document).ready(function(){
 console.log("ready");

 $(".js-show-recipe").click(function(){
  $(this).addClass("active");

  $(".js-show-make").removeClass("active");

   $("#page-recipe").removeClass("make");

 });

 $(".js-show-make").click(function(){

   $(this).addClass("active");

   $(".js-show-recipe").removeClass("active");

  $("#page-recipe").addClass("make");

 });

});