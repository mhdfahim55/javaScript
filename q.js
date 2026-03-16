function operations(a,b,operator){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}
console.log(operations(5, 3, '+'));
console.log(operations(5, 3, '-'));
console.log(operations(5, 3, '*'));
console.log(operations(5, 3, '/'));
console.log(operations(5, 3, '%'));
