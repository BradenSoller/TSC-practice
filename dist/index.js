"use strict";
console.log('hello');
const number1 = document.getElementById("num1");
const printButton = document.getElementById("printBtn");
const printValue = document.getElementById("enteredNumber");
console.log(printButton);
console.log(printValue);
function printEnteredValue() {
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
;
printButton.addEventListener("click", printEnteredValue);
// function Add(a: number, b: number) {
//    let sum = 0;
//     return sum = a + b
// }
// console.log(Add(3, 2));
//# sourceMappingURL=index.js.map