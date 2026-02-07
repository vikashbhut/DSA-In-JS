/**
 *  Sieve of eratosthenes
 *
 *  N * log(logN) + O(N) + O(N)
 *
 */

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
function printAllPrimeNumber1(n) {
  for (i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// Optimize - 1

function sieveOfEratosthenes(n) {
  let prime = Array(n + 1).fill(true);

  prime[0] = prime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.reduce((acc, isPrime, index) => {
    if (isPrime) acc.push(index);
    return acc;
  }, []);
}

console.log(sieveOfEratosthenes(30));
