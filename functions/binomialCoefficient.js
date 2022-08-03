//Write a function that takes two parameters num and k nd returns the value of binomial coefficient

//Binomial coefficient

//C(n,0)=C(n,n)=1 --> Base Case
//C(n,k)=C(n-1,k-1)+C(n-1,k)
 
function binomialCoefficient(n,k){
     //Base Case
     if(k>n){
        return 0;
     }
     if(k===0||k===n){
        return 1;
     }

     return binomialCoefficient(n-1,k-1)+binomialCoefficient(n-1,k);
}

console.log(binomialCoefficient(4,2));