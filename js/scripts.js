$(document).ready(function() {
  $("form#langSelect").submit(function(event){
    const questionTwo = $("select#questionTwo").val();
    const questionFive = $("input:radio[name=company]:checked").val();

    if (questionTwo === "choiceOne" && questionFive == "largeCompany") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (questionTwo === "choiceOne" && questionFive == "Startup") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (questionTwo === "choiceOne" && questionFive == "Robot") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="choiceTwo" && questionFive == "largeCompany") {
      $("#Ruby").show()
      $("#cSharp").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="choiceTwo" && questionFive == "Startup") {
      $("#Ruby").show()
      $("#cSharp").hide()
      $("#Javascript").hide()
    } else if (questionTwo ==="choiceTwo" && questionFive == "Robot") {
      $("#Ruby").hide()
      $("#cSharp").show()
      $("#Javascript").hide()
    } else if (questionTwo ==="choiceThree" && questionFive == "Robot") {
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
});