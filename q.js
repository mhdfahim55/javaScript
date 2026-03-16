function week(num){
    if(num == 1){
        return "sunday";
    }
    else if(num ==2){
        return "monday";
    }
    else if(num ==3){
        return "tuesday";
    }
    else if(num ==4){
        return "wednesday";
    }
    else if(num ==5){
        return "thursday";
    }
    else if(num ==6){
        return "friday";
    }
    else if(num ==7 ){
        return "saturday";
    }
    else { return "invalid day";}
}

console.log(week(1));
console.log(week(5));
console.log(week(7));
console.log(week(70));
