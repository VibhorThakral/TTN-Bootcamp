// Q16 Add cross button on row and bind click function which make a delete request to server, after success event remove the row from dom
$(function(){
  var content = "<table>";
  var str = "ajax-main";
  $.ajax({url: "https://jsonplaceholder.typicode.com/users", async: false, success: function(result) {
      for(i=0;i<result.length;i++){
          content +=  '<tr id = '+ result[i].id +'><td>' + result[i].id + '</td><td>'+ result[i].name+ '</td><td>' + result[i].username + '</td><td>' + result[i].email + '</td><td><button value='+ i +' class='+ str +'>X</button></td></tr>' ;
      }
      content += "</table>"
      $('#here_table').append(content); 
  }}); 


 $(".ajax-main").on("click",function(){
    var id = $(this).val();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/' + id+1,
      type: 'DELETE',
      success: function(data) {
        $("table tr button").each(function(){
         if($(this).val() == id)
         {          
             var i = parseInt(id) + 1;
             $("#"+i).remove();
         }
        });
      },
      error: function(status, err) {
        console.log('There was an error: ' + err);
      }
    });  

 })
});
