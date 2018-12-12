$(document).ready(function(){
  var flavors = ["Vanilla", "Cookies and Cream", "Peanut Butter Cup"]
  flavors.forEach(function(flavor) {
    var indPos = flavors.indexOf(flavor) + 1;
    $("div#output-div").append(
      `<p>Favorite flavor \#${indPos} is ${flavor}.</p>`
    );
  });
});
