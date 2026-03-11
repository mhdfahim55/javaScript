// counter with recursion

let count = 0;
function counter(){
    count++;
    console.log(count);
    if(count < 5){
        counter();
    }
}
counter();