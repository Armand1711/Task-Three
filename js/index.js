function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;
  
    if (operation === '+') {
      result = num1 + num2;
    } else if (operation === '-') {
      result = num1 - num2;
    } else if (operation === '*') {
      result = num1 * num2;
    } else if (operation === '/') {
      result = num1 / num2;
    }
  
    console.log('Result:', result);
  }
  