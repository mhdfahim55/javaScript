let arr=[1,3,55,100]

let max=Math.max(...arr)
let sec=Math.max(...arr.filter(v=>v!==max))
console.log(sec);
