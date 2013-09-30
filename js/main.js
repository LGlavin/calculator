$('#calculator').on('submit', function(e){
  e.preventDefault();

  var firstNumber = $('#first-number').val();
  var secondNumber = $('#second-number').val();

  var $errorDiv = $("div.error");
  var $resultEl = $("#result");
  var $guess = $("#user-guess");
  
  $errorDiv.html("");
  $resultEl.html("");
  if(firstNumber !== '' && secondNumber !== ''){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    var sum = firstNumber + secondNumber;
    
     $resultEl.html("Result: " + (firstNumber + secondNumber));

    if(parseInt($("#user-guess").val()) === sum){
      $resultEl.css({"background-color": 'green'});
    }
    else {
      $resultEl.css({"background-color": 'red'});
    }
  }
  else {
    $errorDiv.html("Please specify both numbers");
  }

});
