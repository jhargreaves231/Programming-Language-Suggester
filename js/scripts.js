$(document).ready(function() {
  $("form#celebrity").submit(function(event){
    const stink = $("select#stink").val();

    if (stink === "beans") {
      $("#Obama").show()
    } else {
      $("#Ryan").show()
    }

    event.preventDefault();
  });
});