

function isPrime(n){
    
 for (i=2; i < n; i++) {
    if (n%i ==0){
        return 'not a prime num';
        
    }

  }
     return 'your number is a prime number';
}
var result = isPrime(19)
console.log(result);