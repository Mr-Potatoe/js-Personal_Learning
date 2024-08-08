

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


// fetchUsers()    
//     .then(users => {
//         console.log('Fetched users:',users);
//     })
//     .catch(error => {
//         console.error('Error fetching users:', error);
//     })


function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
                <div class="user-info">
                    <strong>Name:</strong>  ${user.name}<br>
                    <strong>Email:</strong>  ${user.email}<br>
                    <strong>Address:</strong>  ${user.address.street}, ${user.address.city}<br>
                    <strong>Phone:</strong>  ${user.phone}<br>
                </div> `;
        userList.appendChild(li);
    });
}

// fetchUsers().then(users => {
//     if(users) {
//         displayUsers(users);
//     }
// })
// .catch(error => {
//     console.error('Error fetching users:', error);
//     document.getElementById('demo').innerHTML = 'Error fetching users';
// });

async function loadUsers() {
    try {
        const users = await fetchUsers();
        displayUsers(users);
    } catch (error) {
        document.getElementById('demo').innerHTML = 'Error fetching users';
    }
}

loadUsers();
