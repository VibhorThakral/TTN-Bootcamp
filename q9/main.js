// Q9 Get dropdown selected value on onchanage event and append in div container
$('#cars').on('change', function(){
  let $value = $('option').filter(":selected").text();
  $('.selected-value').text($value);
});