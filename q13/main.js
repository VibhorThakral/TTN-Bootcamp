// Q13 Get the max height of elements using jquery each method

$(function(){
  let maxHeight = 0;

  $('p').each(function(){
    let elHeight = $(this).height();
    if(elHeight > maxHeight) {
      maxHeight = elHeight
    }
  });

  console.log('The height of the element with maximum height is: ' + maxHeight + 'px');
})
