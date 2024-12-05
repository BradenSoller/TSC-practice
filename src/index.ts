console.log('hell')

    

    const number1 = document.getElementById("num1") as HTMLInputElement;
    const printButton = document.getElementById("printBtn") as HTMLButtonElement;
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement;
const Timeout = document.getElementById("timeOut") as HTMLButtonElement;
    console.log(printButton);
console.log(printValue);
    console.log(Timeout)



    function printEnteredValue(): any {
        const numb1 = parseFloat(number1.value);
        printValue.textContent = numb1.toString();
      
    };

    printButton.addEventListener("click", printEnteredValue);


function sayHi():void  {
    setTimeout(() => {
      console.log("hi")
  },3000)
} 

// sayHi()

// Timeout.addEventListener("wait", sayHi);



document.getElementById("timeOut")?.addEventListener("click", sayHi
    // Trigger the timeout when button is clicked
    // qeustion mark triggers optional chaining to avoid runtime errors
);

// function Add(a: number, b: number) {
//    let sum = 0;
//     return sum = a + b
    
// }



// console.log(Add(3, 2));





