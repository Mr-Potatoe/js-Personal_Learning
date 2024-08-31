document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.getElementById('createUserForm');
    const updateUserForm = document.getElementById('updateUserForm');
    const deleteUserForm = document.getElementById('deleteUserForm');
    const usersList = document.getElementById('usersList');

    // Fetch and display all users
    function fetchUsers() {
        fetch('/users')
            .then(response => response.json())
            .then(data => {
                usersList.innerHTML = '<ul>' + data.map(user => `<li>ID: ${user.id}, Name: ${user.name}, Email: ${user.email}</li>`).join('') + '</ul>';
            });
    }

    fetchUsers(); // Initial load of users

    // Create a new user
    createUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            fetchUsers();
            createUserForm.reset();
        });
    });

    // Update a user
    updateUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('updateId').value;
        const name = document.getElementById('updateName').value;
        const email = document.getElementById('updateEmail').value;

        fetch(`/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            fetchUsers();
            updateUserForm.reset();
        });
    });

    // Delete a user
    deleteUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('deleteId').value;

        fetch(`/users/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            fetchUsers();
            deleteUserForm.reset();
        });
    });
});
