// Q8 Click event not working on element which added dynamicly or via script, make it work using .on method
$(function(){
  var obj = $("<button id='to_click'>Question 8</button>");
  
  $(".q8").append(obj);

  $("#to_click").on("click",function(){
      console.log("Click Working for QUestion 8");
  });
});