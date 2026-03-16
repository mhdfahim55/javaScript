function age(num){
    if(num < 13){
        return "child";
    }
    else if(num >= 13 && num <= 19){
        return "teenager";
    }
    else if(num >= 20 && num <= 59){
        return "adult";
    }
    else{
        return "senior";
    }
}

console.log(age(5));
console.log(age(15));
console.log(age(25));
console.log(age(70));
