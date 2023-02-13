let myForm = document.querySelector('#form');
let fullName = document.querySelector('#fullName-input');
let email = document.querySelector('#email-input');
let salary = document.querySelector('#salary-input');
let city = document.querySelector('#city-input');
let txtInput = document.querySelectorAll('.form__input__item input');
let myTable = document.querySelector('.users_list');

let users = [];

const renderRow = (item) => `    
<tr>
    <td>${item.fullName}</td>
    <td>${item.email}</td>
    <td>${item.salary}</td>
    <td>${item.city}</td>
    <td>
        <button data-id=${item.id} onclick="deleteUser(this);">Delete</button>
    </td>
</tr>
`;

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    users.push({
        id: Date.now(),
        fullName: fullName.value,
        email: email.value,
        salary: salary.value,
        city: city.value
    });
    myTable.innerHTML = users.reduce((res,item) => res + renderRow(item),'');
    clearForm();
});

function deleteUser(element) {
    element.parentElement.parentElement.remove();
    users.splice(users.indexOf(x => x.id == element.dataset.id),1);
}

function clearForm() {
    txtInput.forEach((item) => {item.value = ""});
}






