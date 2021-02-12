// Q12 We have bind a click funtion to parent div but we want stop it from performing when user clicks on its child li
$(function() {
  $('.q12').on('click', function() {
    console.log('UL Clicked');
  });
  $('.q12 li').on('click', function (event) {
    event.stopPropagation();
  });
});