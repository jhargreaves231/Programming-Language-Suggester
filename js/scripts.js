$(document).ready(function() {
  $("form#langSelect").submit(function(event){
    const questionTwo = $("select#questionTwo").val();

    if (questionTwo === "choiceOne") {
      $("#cSharp").show()
      $("#Ruby").hide()
      $("#Javacript").hide()
    } else if (questionTwo ==="choiceTwo") {
      $("#Ruby").show()
      $("#cSharp").hide()
    } else {
      $("#Javascript").show()
      $("#cSharp").hide()
      $("#Ruby").hide()
    }

    event.preventDefault();
  });
});