let queue = [3, 12, 16, 60];

// Brute Force

function primeFactors(n) {
  let list = [];
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      list.push(i);
      while (n % i == 0) {
        n = n / i;
        list.push(i);
      }
    }
  }
  if (n > 1) list.push(n);
  return list;
}

function primeFactorisation(queue) {
  for (const elemet of queue) {
    console.log(primeFactors(elemet));
  }
}

//Optimal approach

function primeFactorisationOptimized(queue, max) {
  let smallestPrimeFactors = [];

  for (let i = 0; i <= max; i++) {
    smallestPrimeFactors[i] = i;
  }

  for (let i = 2; i * i <= max; i++) {
    if (smallestPrimeFactors[i] == i) {
      for (let j = i * i; j <= max; j += i) {
        if (smallestPrimeFactors[j] == j) {
          smallestPrimeFactors[j] = i;
        }
      }
    }
  }

  for (let elemet of queue) {
    let list = [];
    while (elemet !== 1) {
      list.push(smallestPrimeFactors[elemet]);
      elemet = elemet / smallestPrimeFactors[elemet];
    }
    console.log(list);
  }
}

primeFactorisationOptimized(queue, 60);
