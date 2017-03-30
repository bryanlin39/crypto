function strip(phrase) {
  var removePunct = phrase.replace(/[^A-Za-z]/g,"");
  var stripped = removePunct.toLowerCase();
  return stripped
}

function getSquareRoot(phrase) {
  var stringLength = phrase.length;
  var squareRoot = parseInt(Math.sqrt(stringLength));
  // if (stringLength % squareRoot)
  // console.log("Square root is " + squareRoot);
  // console.log("String length is " + stringLength);
  return squareRoot
}

function makeCube(phrase, squareRoot) {
  var cubeArray = [];
  var phraseArray = phrase.split("");
  while (phraseArray.length > 0) {
    var splicedRow = phraseArray.splice(0, squareRoot);
    cubeArray.push(splicedRow)
  }
  return [cubeArray, cubeArray.length]
}

function encryptMessage(cubeArray, squareRoot) {
  var encryptedMessage = "";
  debugger;
  for (var i = 0; i < squareRoot; i++) {
    for (var k = 0; k < squareRoot; k++) {
      encryptedMessage += cubeArray[k][i];
    }
  }
  return encryptedMessage
}


$(document).ready(function() {
  $("form").submit(function(event) {
    var phraseInput = $("#phrase").val();
    // alert(crypto("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~"))
    var stripped = strip(phraseInput);
    var squareRoot = getSquareRoot(stripped);
    var cubeArray = makeCube(stripped, squareRoot);
    var message = encryptMessage(cubeArray, squareRoot);

    console.log(message)

    event.preventDefault();
  });
});
