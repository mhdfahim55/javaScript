// // Convert first letter of words to uppercase

//i/p : today is thursday
//o/p : Today Is Thursday

let a = "today is thursday";

let s=a.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(s);