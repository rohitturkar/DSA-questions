//Given an Integer n, write a function that returns the count of trailing zeroes in n!.

//Approach 1
let count=0;
let factValue=1;
function calculateFactorial(num){
    for(let i=1;i<=num;i++){
      factValue=factValue*i;
    }
    return factValue;   
}
function trailingZeroes(fact){
    for(i=0;i<=fact;i++){
        let value=fact%10;
        if(value===0){
            count=count+1;
        }
        fact=fact/10;
    }
    return count;
}

let fact=calculateFactorial(4);
console.log(trailingZeroes(fact));
