console.log('hell');
var number1 = document.getElementById("num1");
var printButton = document.getElementById("printBtn");
var printValue = document.getElementById("enteredNumber");
var Timeout = document.getElementById("timeOut");
console.log(printButton);
console.log(printValue);
function printEnteredValue() {
    var numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
;
printButton.addEventListener("click", printEnteredValue);
function sayHi() {
    setTimeout(function () {
        console.log("hi");
    }, 3000);
}
Timeout.addEventListener("wait", sayHi);
// function Add(a: number, b: number) {
//    let sum = 0;
//     return sum = a + b
// }
// console.log(Add(3, 2));
