// print fibnocci series
// each number is the sum of the two before it.Its begins 0,1,1,2,3,5,8,
// find the first 10 numbers in the fibnocci series

function fibnocci(n){
    let num1 = 0
    let num2 = 1
    let result = "";
    for(i=1;i<=n;i++){
        result += num1 + " ";
        let sum= num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    console.log(result);
}
fibnocci(10);