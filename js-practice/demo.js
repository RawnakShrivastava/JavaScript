var arrayOfIntegers = [7, 5, 1, 4, 9, 6, 3, 8];
var upperBound = 9;
var lowerBound = 1;

for (var i = 0; i < arrayOfIntegers.length; i++) {
  // if(!arrayOfIntegers.includes(i)) {
  //     console.log(i);
  // }
}

// Prime number or not
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrime(11));
