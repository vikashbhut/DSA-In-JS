function isPrime(n) {
  let counter = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      counter++;
      if (i !== n / i) {
        counter++;
      }
    }
  }
  if (counter == 2) return true;
  else return false;
}

console.log(isPrime(36));
