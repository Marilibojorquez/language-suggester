$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const JavaScript = parseInt($("input#JavaScript").val());

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();

    event.preventDefault();
  });
});