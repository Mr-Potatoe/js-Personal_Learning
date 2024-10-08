# ES Module Example

This project demonstrates the use of ES modules in a basic web development setup. It includes an HTML file that imports a JavaScript module to perform a simple addition operation and display the result on the web page.

## Project Structure

```
/project-root
  /index.html
  /scripts
    /export.js
    /import.js
  /styles
    /style.css
```

- **`index.html`**: The main HTML file that loads the module and displays the result.
- **`import.mjs`**: The ES module file that imports the `add` function.
- **`export.mjs`**: The ES module file that exports the `add` function.
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

### 2. Set Up a Local Server

ES modules require serving files over HTTP/HTTPS. You can use a local server to achieve this.

#### Using `http-server` (Node.js Required)

1. **Install `http-server` Globally:**

   ```bash
   npm install -g http-server
   ```

2. **Start the Local Server:**

   Navigate to the project root and start the server:

   ```bash
   http-server
   ```

   By default, this will serve your files at `http://localhost:8080`.

### 3. Open in Browser

Open your web browser (e.g., Microsoft Edge) and navigate to `http://localhost:8080` to see the project in action.

## File Details

### `index.html`

Contains the basic HTML structure and includes a `<script>` tag with `type="module"` to import the ES module.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles/style.css"/>
  <title>Hello, World!</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p id="demo"></p> 
  
  <script type="module" src = "scripts/import.mjs"> //type = "module" Enables the use of import and export syntax.
  </script>
</body>
</html>
```

### `export.mjs`

exports the `add` function 

```javascript

export function add(a, b) {
    return a + b;
}
```
### `import.mjs`

Imports the `add` function used to perform addition.

```javascript
// import.mjs

import {add} from './export.js';

const a = 2;
const b = 3;

const result = add(a, b);

console.log(result); // show log to the console

document.getElementById('demo').innerHTML = result; // display to the index.html page
```

### `styles/style.css`

(Optional) Contains styles for your HTML file.

## Troubleshooting

1. **File Paths:** Ensure that the path to `import.mjs` is correct relative to `index.html`.

2. **ES Module Support:** Verify that your browser supports ES modules. Most modern browsers do, but ensure you're using an up-to-date version.

3. **Local Server:** Use a local server to serve your files. ES modules will not work if you open the HTML file directly from the file system.

4. **Console Errors:** Open Developer Tools in your browser (F12) and check the Console tab for any error messages.

5. **Browser Compatibility:** Ensure you are using a modern browser that supports ES modules (e.g., the latest versions of Chrome, Firefox, or Edge).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.