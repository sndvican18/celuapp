$(document).ready(function(){
  $(".submenu").click(function(){
    $(this).children("ul").slideToggle();
  })

  $(".submenu").click(function(p){
    p.stopPropagation();
  })
});
