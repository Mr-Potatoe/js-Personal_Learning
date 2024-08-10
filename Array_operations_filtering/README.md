# JavaScript Array Operations and Filtering

This document provides an overview of how to work with arrays in JavaScript, including filtering and displaying data. The code examples demonstrate how to use array methods to filter and display user data in various formats.

## Code Overview

### User Data Array

The `users` array contains a list of user objects. Each object includes various properties such as `name`, `age`, `isActive`, `address`, `preferences`, and `details`.

```javascript
const users = [
    { name: 'John', age: 30, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Jane', age: 25, isActive: false, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Mark', age: 35, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Sarah', age: 29, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
];
```

### Display All Users

The `console.table()` method is used to display the `users` array in a table format. This method is useful for visualizing data in a structured way.

```javascript
console.table('Users in a table format: ');
console.table(users);
```

### Filter Users by Age

The `filter` method is used to create a new array with users who are aged less than 30. This method tests each element of the array with the provided function and includes only those that pass the test.

```javascript
const youngUsers = users.filter(user => user.age < 30);
```

### Filter Active Users

Similarly, the `filter` method is used to create a new array with users who are currently active (`isActive: true`).

```javascript
const activeUsers = users.filter(user => user.isActive);
```

### Display Users Aged Less Than 30

The filtered array of users who are aged less than 30 is displayed using `console.table()`.

```javascript
console.log('Users aged less than 30:');
console.table(youngUsers);
```

### Display Active Users

The filtered array of users who are active is also displayed using `console.table()`.

```javascript
console.log('Users who are active:');
console.table(activeUsers);
```

### Display Users Who Are Young and Active

To find users who are both young (aged less than 30) and active, the code filters the `youngUsers` array further by checking if `user.isActive` is `true`.

```javascript
console.log('Users who are young and active:');
console.table(youngUsers.filter(user => user.isActive));
```

## Summary

- **`console.table()`**: Displays arrays and objects in a tabular format for better readability.
- **`filter()`**: Creates a new array with elements that pass the provided test function. It is used here to filter users based on age and activity status.

### Example Output

When running the code, you will see the following output:

1. **Users in a Table Format**: Displays all user objects in a table.
2. **Users Aged Less Than 30**: Displays users whose age is less than 30.
3. **Users Who Are Active**: Displays users who have an `isActive` property set to `true`.
4. **Users Who Are Young and Active**: Displays users who are both aged less than 30 and active.

By using these techniques, you can efficiently filter and display data from arrays based on specific criteria, making it easier to analyze and debug your applications.
