$(document).ready(function() {
  $("form#langSelect").submit(function(event){
    const questionTwo = $("select#questionTwo").val();

    if (questionTwo === "choiceOne") {
      $("#cSharp").show()
    } else if (questionTwo ==="choiceTwo") {
      $("#Ruby").show()
    } else {
      $("#Javascript").show()
    }

    event.preventDefault();
  });
});