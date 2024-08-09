

let message = "Hello World";

document.querySelector(".header").innerHTML = message;
addEventListener("click", function() {
    this.document.querySelector(".header").innerHTML = "Hello";
})




/*  Async Await function with better error handling and best practices */

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
       if(!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.phone}</td> `;
        userList.appendChild(tr);
    });
}


async function loadUsers() {
    try {
        const users = await fetchUsers();
        displayUsers(users);
    } catch (error) {
        document.getElementById('demo').innerHTML = 'Error fetching users';
    }
}

loadUsers();
