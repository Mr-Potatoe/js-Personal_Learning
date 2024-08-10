const users = [
    { name: 'John', age: 30, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Jane', age: 25, isActive: false, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Mark', age: 35, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
    { name: 'Sarah', age: 29, isActive: true, address: 'Zamboanga', preferences: ['email', 'sms'], details: undefined },
];

// Display all users in a table format
console.table('Users in a table format: ');
console.table(users);

// Filter users who are aged less than 30
const youngUsers = users.filter(user => user.age < 30);
const activeUsers = users.filter(user => user.isActive);

// Display users aged less than 30
console.log('Users aged less than 30:');
console.table(youngUsers);


// Display users who are active
console.log('Users who are active:');
console.table(activeUsers);

// user that are young and active
console.log('Users who are young and active:');
console.table(youngUsers.filter(user => user.isActive));

