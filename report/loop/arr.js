// const arr = "heeloo";
// for (let num of arr) {
//     console.log(num); // Output: 1, 2, 3, 4, 5
// }

outer: for (let n = 0; n < 10; n++) {
    for (let o = 0; o < 10; o++) {
        if (o === 5) {
            break outer; // Exits the outer loop when 'o' equals 5
        }
        console.log(o); // Output: 0, 1, 2, 3, 4
    }
}