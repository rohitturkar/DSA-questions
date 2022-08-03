//find the factorial of number 5

let factorresult=1;
function factorial(num){
    for(let i=1;i<=num;i++){
      factorresult=factorresult*i;
    }
    return factorresult;
}

console.log(factorial(5));