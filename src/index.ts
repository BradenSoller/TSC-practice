console.log('hello')
const number1 = document.getElementById("num1") as HTMLInputElement;

const printButton = document.getElementById("printBtn") as HTMLButtonElement;
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement;
console.log(printButton);
console.log(printValue);



function printEnteredValue(): void {
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
};

printButton.addEventListener("click", printEnteredValue);




// function Add(a: number, b: number) {
//    let sum = 0;
//     return sum = a + b
    
// }



// console.log(Add(3, 2));





