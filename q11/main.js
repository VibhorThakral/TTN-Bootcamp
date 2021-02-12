// Q11 On clicking on "google" tag. It is taking us to google home page. Stop it from happening.
$(function() {
  $('a.go-google').on('click', (event) => {
    event.preventDefault();
  });
});