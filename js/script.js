//Business Logic
function add(number1, number2) {
    return number1 + number2;
  }
  
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  function multiply(number1, number2) {
    return number1 * number2;
  }
  
  function divide(number1, number2) {
    return number1 / number2;
  }

  function modulos(number1, number2) {
    return number1 % number2;
  }

  function average(number1, number2) {
    return (number1 + number2)/2;
  }

  function squareRoot(number1, number2) {
    return (Math.sqrt(number1)) + " and " + (Math.sqrt(number2));
  }

  //User Interface Logic

  $(document).ready(function() {
    $("form#calculator").submit(function(event) {
      
      const number1 = parseFloat($("#input1").val());
      const number2 = parseFloat($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      let result;
      if (operator === "add") {
        result = add(number1, number2);
      } else if (operator === "subtract") {
        result = subtract(number1, number2);
      } else if (operator === "multiply") {
        result = multiply(number1, number2);
      } else if (operator === "divide") {
        result = divide(number1, number2);
      } else if (operator === "modulos") {
        result = modulos(number1, number2);
      }  else if (operator === "average") {
        result = average(number1, number2);
      } else if (operator === "sqroot") {
        result = squareRoot(number1, number2);
      }
      $("#output").text(result);

      event.preventDefault();
    });
  });