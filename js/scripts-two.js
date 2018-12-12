$(document).ready(function() {
  $("#formOne").submit(function() {
    var blanks = ["species", "verbOne", "nounOne", "planetName", "locationPrefix", "location", "jobType", "eventOne", "eventTwo", "emotion", "indivName", "action", "genderRef", "createdSomething"];

    blanks.forEach(function(blank){
      var userIn = $("input#"+blank).val();
      $("."+blank).text(userIn);
    });

    $("#story").show();

    event.preventDefault();
  });
});
