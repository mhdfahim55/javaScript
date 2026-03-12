// print all vowels in a sentence using includes

let str = "hai HELLO"

let vowels = ['a', 'e', 'i', 'o', 'u',"A", "E", "I", "O", "U"]

console.log(str.split('').filter(v=>vowels.includes(v)));
