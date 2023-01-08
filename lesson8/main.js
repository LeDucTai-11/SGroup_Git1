let myForm = document.querySelector('#form');
let fullName = document.querySelector('#fullName-input');
let email = document.querySelector('#email-input');
let salary = document.querySelector('#salary-input');
let city = document.querySelector('#city-input');
let txtInput = document.querySelectorAll('.form__input__item input');


let myTable = document.querySelector('#users');

let users = [
    {
        id: 1,
        fullName: 'Alex',
        email: 'alex@gmail.com',
        salary: 100,
        city: 'San Francisco'
    }
];

window.onload = () => {
    renderUsers(users);
};

function renderUsers(arr) {
    myTable.innerHTML = `
        <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>City</th>
            <th>Actions</th>
        </tr>
    `;

    arr.forEach((item,index) => {
        myTable.innerHTML +=
        `    
        <tr>
            <td>${item.fullName}</td>
            <td>${item.email}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td>
                <button onclick="deleteUser(${index});">Delete</button>
            </td>
        </tr>
        `;
    });
}

function clearForm() {
    txtInput.forEach((item) => {item.value = ""});
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        id: Date.now(),
        fullName: fullName.value,
        email: email.value,
        salary: salary.value,
        city: city.value
    }
    users.push(obj);
    renderUsers(users);
    clearForm();
});

function deleteUser(index) {
    users.splice(index,1);
    renderUsers(users);
}






