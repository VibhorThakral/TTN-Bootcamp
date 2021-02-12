// Q13 Get the max height of elements using jquery each method
$(function() {
  $('p').each(function(index) {
    console.log(index + ": " + $(this).css('height'));
  });
});

// The code above gets the height of all the p elements on the page