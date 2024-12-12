"use strict";
var _a;
console.log('hell');
const number1 = document.getElementById("num1");
const printButton = document.getElementById("printBtn");
const printValue = document.getElementById("enteredNumber");
const Timeout = document.getElementById("timeOut");
const printHi = document.getElementById("braden");
console.log(printButton);
console.log(printValue);
console.log(Timeout);
console.log(printHi);
function printEnteredValue() {
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
;
printButton.addEventListener("click", printEnteredValue);
function sayHi() {
    setTimeout(() => {
        console.log("hi");
    }, 3000);
}
// sayHi()
// Timeout.addEventListener("wait", sayHi);
printHi.addEventListener("say", sayHi);
(_a = document.getElementById("timeOut")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", sayHi
// Trigger the timeout when button is clicked
// qeustion mark triggers optional chaining to avoid runtime errors
);
// function Add(a: number, b: number) {
//    let sum = 0;
//     return sum = a + b
// }
// console.log(Add(3, 2));
//# sourceMappingURL=index.js.map