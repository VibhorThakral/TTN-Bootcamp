// Q16 Add cross button on row and bind click function which make a delete request to server, after success event remove the row from dom
$(function() {
  show_data();

  function delete_data() {
    $.ajax({
      headers: {
        'Access-Control-Allow-Origin' : "http://127.0.0.1:5500/", 
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE'
      },
      url: '/data.txt',
      type: 'DELETE',
      success: function(data) {
        show_data();
      }
    });
  }

  function show_data() {
    $.get('/q16/data.txt', function(data) {
      let html;
      html = '<ul><li>' + data + '<button class="cross delete">x</button></li></ul>';
      $('.q16').html(html);
      $('.delete').on('click', delete_data);
    });
  }
});

