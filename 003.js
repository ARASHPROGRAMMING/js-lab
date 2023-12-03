// Prime numbers less than 100

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function displayPrimes(limit) {
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
displayPrimes(100);