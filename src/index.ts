let monthlyCap:number = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('employeeForm') as HTMLFormElement;
//     form.addEventListener('submit', handleSubmit); // Event listener to handle form submission
// });

function handleSubmit(event: Event):void {

    event.preventDefault();

    let firstName = document.getElementById('firstNameInput') as HTMLInputElement;
    let lastName = document.getElementById('lastNameInput') as HTMLInputElement;
    let ID = document.getElementById('idInput') as HTMLInputElement;
    let title = document.getElementById('titleInput') as HTMLInputElement;
    let annualSalary = document.getElementById('annualSalaryInput') as HTMLInputElement;
    const element = document.getElementById('over-budget') as HTMLElement;
console.log(element)

    
    const monthlySalary = parseFloat(annualSalary.value) / 12
    
    const table = document.getElementById('tableBody') as HTMLTableElement
    table.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${ID.value}</td>
    <td>${title.value}</td>
    <td>${annualSalary.value}</td>
    <td><button onclick="deleteText(event)">delete</button></td>
     </tr>`
    
    //clear inputs 
    firstName.value = "";
    lastName.value = "";
    ID.value = "";
    title.value = "";
    annualSalary.value = "";
   
    

    monthlyCap += monthlySalary
    console.log(monthlyCap)

      element.innerHTML = "Total Monthly: $" + monthlyCap.toFixed(2);

    if (monthlyCap > 20000) {
        element.style.color = "red"
    } else {
       ( monthlyCap < 20000 )
        element.style.color = "green"
    }  

  

    
  

      
 
}

function deleteText(event:any) {
    event.target.parentElement.parentElement.remove('td');
}



