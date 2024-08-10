# Async/Await Example Project

This project demonstrates the use of `async` and `await` in JavaScript for fetching and displaying user data from an API. It includes functions for fetching user data, displaying it in a table, and handling errors gracefully.

## Project Structure

```
/project-root
  /index.html
  /script.js
  /styles
    /style.css
```

- **`index.html`**: The main HTML file that includes the JavaScript and displays the user data.
- **`script.js`**: The JavaScript file containing the async functions and logic for handling user data.
- **`styles/style.css`**: (Optional) Stylesheet for additional styling.

## Getting Started

### 1. Clone the Repository

If you have a repository for this project, clone it using:

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd <project-directory>
```

### 2. Set Up the Project

Create the following files and copy the provided content into each.

#### **`index.html`**

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Example</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <h1 class="header">Hello World</h1>
  <table id="user-list">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div id="demo"></div>

  <script src="scripts/script.js"></script>
</body>
</html>
```

#### **`script.js`**

**`script.js`:**

```javascript
let message = "Hello World";

document.querySelector(".header").innerHTML = message;

document.addEventListener("click", function() {
    document.querySelector(".header").innerHTML = "Hello";
});

/* Async Await function with better error handling and best practices */

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
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
    const userList = document.getElementById('user-list').getElementsByTagName('tbody')[0];
    userList.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.phone}</td>
        `;
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
```

#### **`styles/style.css`**

(Optional) Add any styles you want to apply.

**`styles/style.css`:**

```css
/* Example CSS styles */

body {
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
```

### 3. Open in Browser

Open `index.html` in your web browser to see the project in action. If using a local server, start it and navigate to the appropriate URL.

## Explanation

### JavaScript Functions

#### **`fetchUsers` Function**

- **Purpose:** Fetches user data from the API using `fetch`.
- **Error Handling:** Uses `try...catch` to handle network or parsing errors. Throws errors if the HTTP response is not OK.
- **Best Practices:** Checks if the response is OK before attempting to parse JSON.

#### **`displayUsers` Function**

- **Purpose:** Displays user data in a table format.
- **Implementation:** Clears any existing content in the table body and appends new rows for each user.

#### **`loadUsers` Function**

- **Purpose:** Orchestrates the fetching and displaying of user data.
- **Error Handling:** Displays an error message in the DOM if the fetch operation fails.

### Best Practices

- **Error Handling:** Always handle errors gracefully to improve user experience and debugging.
- **Separation of Concerns:** Keep functions focused on specific tasks (e.g., fetching data, displaying data).
- **Asynchronous Operations:** Use `async`/`await` to simplify asynchronous code and improve readability.

## Troubleshooting

1. **Check Console for Errors:** Open Developer Tools (F12) and check for any errors in the Console tab.
2. **Verify API URL:** Ensure that the API URL is correct and accessible.
3. **Local Server:** If running into CORS issues, use a local server to serve your files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.