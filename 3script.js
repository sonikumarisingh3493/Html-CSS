// build a basic calculator that adds two number together and display the result using javascript 
function addNumbers() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);

    let sum = number1 + number2;

    document.getElementById("result").innerHTML = "Result: " + sum;
}