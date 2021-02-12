// Q14 Change color of every cell which has numbers larger than 10.
$(function() {
  $('.q14 tr td:nth-child(2)').each(function() {
    let $cellvalue = $(this).text();  
    if($cellvalue > 10) {
      $(this).css('background', 'teal');
    }
  });
});