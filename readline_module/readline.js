

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('enter first number :', (num1) => {
    rl.question('enter second number :', (num2) => {
        console.log(`the sum of ${num1} and ${num2} is ${parseInt(num1) + parseInt(num2)}`);
        rl.close();
    })
})