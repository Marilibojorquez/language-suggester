
$(document).ready(function () {
  $("form#survey").submit(function (event) {
    //input user numbers
    const question1 = $("#answer1").val();
    const question2 = $("#answer2").val();
    const question3 = $("#answer3").val();
    const question4 = $("#answer4").val();
    const question5 = $("#answer5").val();

    let answer = ["Javascript", "C#s", "Swift"];
    if (answer1 = yes) {
      $("#suggestion").append("Javascript");
      $('#JavaScript').show();

    }
    else if (answer2 = no && answer3 || yes); {
      $("#suggestion").append("Swift");
      $('#Swift').show();
    }
    if (answer4 = no && answer5 || 2) {
      $("#suggestion").append("C#");
      $('#C#').show();
    }



    $("#suggestion").show();


    event.preventDefault();
  
  });
});
