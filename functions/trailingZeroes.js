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

let fact=calculateFactorial(20);
console.log(trailingZeroes(fact));


//Approach-2

let ans=0;
let p=5;
function calculateTrailingZeroes(n){
    if(n<0){
        return -1;
    }
    while((n/p)>0){
        ans=ans+Math.floor((n/p));
        p=p*p;
    }
    return ans;
}


console.log(calculateTrailingZeroes(5))
//Solution Approach

// number of 2's in prime Factorization of n! is greater than number of 5's 
//if we count number of 5's in n! we can calculate the trailing zeroes in n!

//Math.floor((n/p)) +Math.floor((n/p*p))+Math.floor((n/p*p*p))


