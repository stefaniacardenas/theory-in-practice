console.log(900.9 === 300.3 * 3); // returns false
console.log(300.3 * 3); // returns 900.9000000000001
console.log(Number((300.3 * 3).toFixed(2))); // returns 900.9
console.log(Number((300.3 * 3).toPrecision(12))); // returns 900.9
console.log(((300.3 * 10) * 3) / 10); // returns 900.9
