// Q7 Bind a click function to an "click" element and append next "click" next to it.
$(function(){
  let count = 0;
  $('.q7').on('click', function(){
    count++;
    $('.result').append('Clicked ');
  });
});