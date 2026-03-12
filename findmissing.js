const arr = [1, 2, 4, 5];

const n = 5;

// sum of 1..5
const totalSum = Array.from({length: n}, (_, i) => i + 1)
                      .reduce((acc, num) => acc + num, 0);

// sum of array
const arrSum = arr.reduce((acc, num) => acc + num, 0);

const missing = totalSum - arrSum;

console.log(missing);