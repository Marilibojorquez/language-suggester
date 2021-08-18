$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const q1 = parseInt($("input#scale").val());
    const q2 = parseInt($("input#scale2").val());
    const q3 = parseInt($("input#scale3").val());
    const q4 = parseInt($("input#scale4").val());
    const q5 = parseInt($("input#scale5").val());
  


    let suggestion = ["Javascript", "Go", "Swift"]
    
    console.log(suggestion)  

    $("#language").text(scale);
    $("#suggestion").show();
    });
  });

// Suggest language 
  var suggestion = ['Go', 'Javascript', 'Swift', 'C#',]

  function newSuggestion() {
  var suggestLanguage = ("Javascript")
}



