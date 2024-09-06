document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.getElementById('createUserForm');
    const updateUserForm = document.getElementById('updateUserForm');
    const deleteUserForm = document.getElementById('deleteUserForm');
    const usersList = document.getElementById('usersList');

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Allows letters with one space between words
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    // Display an error message
    function showError(form, message) {
        const errorElement = form.querySelector('.error');
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.display = 'block';
    }

    // Clear error messages
    function clearError(form) {
        const errorElement = form.querySelector('.error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Validate name (letters with one space between words)
    function validateName(name) {
        console.log(`Validating name: ${name}`);
        return nameRegex.test(name);
    }

    // Validate email format
    function validateEmail(email) {
        return emailRegex.test(email);
    }

    // Capitalize the first letter of each word
    function capitalizeName(name) {
        return name
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

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
        let name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        clearError(createUserForm);

        // Validate name and email
        if (!validateName(name)) {
            showError(createUserForm, 'Name must contain only letters with a single space between words');
            return;
        }
        if (!validateEmail(email)) {
            showError(createUserForm, 'Please enter a valid email');
            return;
        }

        // Capitalize the first letter of each word
        name = capitalizeName(name);

        console.log(`Submitting user: ${name}, ${email}`);

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
        })
        .catch(error => console.error('Error during user creation:', error));
    });

    // Update a user
    updateUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('updateId').value;
        let name = document.getElementById('updateName').value;
        const email = document.getElementById('updateEmail').value;

        clearError(updateUserForm);

        // Validate name and email
        if (!validateName(name)) {
            showError(updateUserForm, 'Name must contain only letters with a single space between words');
            return;
        }
        if (!validateEmail(email)) {
            showError(updateUserForm, 'Please enter a valid email');
            return;
        }

        // Capitalize the first letter of each word
        name = capitalizeName(name);

        console.log(`Updating user: ${name}, ${email}`);

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
        })
        .catch(error => console.error('Error during user update:', error));
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
        })
        .catch(error => console.error('Error during user deletion:', error));
    });
});
