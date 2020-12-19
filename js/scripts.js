$(document).ready(function() {
  $("form#langSelect").submit(function(event){
    const Two = $("select#questionTwo").val();
    const Five = $("input:radio[name=company]:checked").val();


    const questionTwo = parseInt(Two)
    const questionFive = parseInt(Five)

    const totalScore = questionTwo + questionFive

    if (totalScore <= 2){
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (totalScore <= 4) {
      $("#Ruby").show()
      $("#cSharp").hide()
      $("#Javascript").hide()
    } else {
      $("#Javascript").show()
      $("#cSharp").hide()
      $("#Ruby").hide()
    }

    event.preventDefault();
  });
});


/*
   if (questionTwo === "1" && questionFive == "1") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (questionTwo === "1" && questionFive == "2") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (questionTwo === "1" && questionFive == "3") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="2" && questionFive == "1") {
      $("#Ruby").show()
      $("#cSharp").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="2" && questionFive == "2") {
      $("#Ruby").show()
      $("#cSharp").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="2" && questionFive == "3") {
      $("#Ruby").hide()
      $("#cSharp").show()
      $("#Javascript").hide()
    } else if (questionTwo ==="3" && questionFive == "3") {
      $("#Ruby").hide()
      $("#cSharp").show()
      $("#Javascript").hide()
    } else {
      $("#Javascript").show()
      $("#cSharp").hide()
      $("#Ruby").hide()
    }
  
    event.preventDefault();
  });
}); */