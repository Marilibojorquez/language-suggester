$(document).ready(function () {
  $("form#survey").submit(function(event) {
    event.preventDefault();  
    const question1 = $("input#question1").val();
    const question2 = $("input#question2").val();
    const question3 = $("input#question3").val();
    const question4 = $("input#question4").val();
    const question5 = $("input#question5").val();

    if (scale = 4) {
      $("#language").append("Javascript");
      $("#JavaScript").show();
    
    } 
    else if (scale >= 5 && scale < 2) {
      $("#language").append("Swift");
      $("#Swift").show();
    } 
    else if (scale <= 3 && scale > 2) {
      $("#language").append("C#");
      $("#C#").show();
    }
  

    $("button").click();

    let suggestion = ["Javascript", "Go", "Swift"];

    console.log(suggestion);

    $("#language").show();

    // Suggest language
    let suggestion = ["Go", "Javascript", "Swift", "C#"];
    console.log(language);

  });
});
