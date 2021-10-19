$(document).ready(function() {
  $("#1").click(function() {
    reveal("#1p");
  });
  $("#2").click(function() {
    reveal("#2p");
  });
  $("#3").click(function() {
    reveal("#3p");
  });
  function reveal(identifier) {
    $(identifier).toggle();
  }
});
