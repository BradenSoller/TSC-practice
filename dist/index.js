"use strict";
let monthlyCap = 0;
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('employeeForm') as HTMLFormElement;
//     form.addEventListener('submit', handleSubmit); // Event listener to handle form submission
// });
function handleSubmit(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstNameInput');
    let lastName = document.getElementById('lastNameInput');
    let ID = document.getElementById('idInput');
    let title = document.getElementById('titleInput');
    let annualSalary = document.getElementById('annualSalaryInput');
    const element = document.getElementById('over-budget');
    console.log(element);
    const monthlySalary = parseFloat(annualSalary.value) / 12;
    const table = document.getElementById('tableBody');
    table.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${ID.value}</td>
    <td>${title.value}</td>
    <td>${annualSalary.value}</td>
    <td><button onclick="deleteText(event)">delete</button></td>
     </tr>`;
    //clear inputs 
    firstName.value = "";
    lastName.value = "";
    ID.value = "";
    title.value = "";
    annualSalary.value = "";
    monthlyCap += monthlySalary;
    console.log(monthlyCap);
    element.innerHTML = "Total Monthly: $" + monthlyCap.toFixed(2);
    if (monthlyCap > 20000) {
        element.style.color = "red";
    }
}
function deleteText(event) {
    event.target.parentElement.parentElement.remove('td');
}
//# sourceMappingURL=index.js.map