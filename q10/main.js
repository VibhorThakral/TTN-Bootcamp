// Q10 Create a dropdown menu using hover method in jquery
$(function() {
  $('.hoverli').hover(function() {
    $(this).find('ul').slideToggle('medium');
  })
});