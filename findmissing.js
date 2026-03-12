const arr = [1, 2, 4, 5];

const missing = 15 - arr.reduce((a, b) => a + b, 0);

console.log(missing);