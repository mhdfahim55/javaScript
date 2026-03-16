function num(num){
    if(num > 0){
        return "+";
    }
    else if(num < 0){
        return "-";
    }
    else{       return "0";
}
}

console.log(num(5));
console.log(num(-3));
console.log(num(0));

