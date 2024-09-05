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
                usersList.innerHTML = `
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        ${data.map(user => `
                            <li style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 15px;
                                background-color: #f9f9f9;
                                border-radius: 8px;
                                margin-bottom: 10px;
                                transition: background-color 0.3s ease;
                                ">
                                <div>
                                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #333;">Name: ${user.name}</p>
                                    <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Email: ${user.email}</p>
                                </div>
                                <span style="font-size: 14px; font-weight: bold; color: #0056b3;">ID: ${user.id}</span>
                            </li>
                        `).join('')}
                    </ul>
                `;
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
