// Q15 Retrive the data from server using ajax get call
$(function(){
  $.get('/q15/data.txt', function(data) {
    let html;
    html = '<ul><li>' + data + '<button class="cross delete">x</button></li></ul>';
    $('.q15').html(html);
  });
});