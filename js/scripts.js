function convertNumeral(number) {

}

$(document).ready(function() {
  $("form").submit(function(event) {
    var phraseInput = parseInt($("#phrase").val());
    alert(convertNumeral(phraseInput))
    event.preventDefault();
  });
});
