var number=13;
var isPrime = true;
 if (number > 1) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
           
        }
    }
    if (isPrime) {
        console.log(number,' is a prime number');
    }
     else {
        console.log(number, 'is not a prime number');
    }
}
  
