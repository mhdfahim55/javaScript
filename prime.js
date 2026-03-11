// Prime numbers are natural numbers that are divisible by only 1 and  the number itself. 
// For example, 2, 3, 5, 7, 11, and 13 are prime numbers.

function prime(num) {
    let flag = true;
    if (num < 1) {
        flag = false
    }
    for(i=2; i<num/2; i++){
        if(num%i==0){
            flag = false;
            break;
    }
    }
    if(flag){
        return "prime"
    }else{
        return "not prime"
    }
}

console.log(prime(3));