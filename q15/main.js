// Q15 Retrive the data from server using ajax get call
$(function(){
  var content = "<table>";
  $.ajax({url: "https://jsonplaceholder.typicode.com/users", async: true, success: function(result) {
    for(i=0;i<result.length;i++){
        content +=  '<tr><td>' + result[i].id + '</td><td>'+ result[i].name+ '</td><td>' + result[i].username + '</td><td>' + result[i].email + '</td></tr>';
    }
    content += "</table>"
    $('#here_table').append(content); 
  }}); 
});