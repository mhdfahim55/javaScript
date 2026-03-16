function number(num){
    if(num  >=1 && num <=10){
        return "low";
    }
    else if(num >=11 && num <=50){
        return "Medium";
    }
    else if(num >=51 && num <=100){
        return "High";
    }
    else { return "out of range";}
}

console.log(number(5));
console.log(number(45));
console.log(number(67));

