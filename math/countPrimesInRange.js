function getSieves(n) {
  let prime = Array(n + 1).fill(1);
  prime[0] = prime[1] = 0;

  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }

  return prime;
}

let queries = [
  [1, 10],
  [5, 10],
];

function countPrimes(queries, max) {
  let prime = getSieves(max);

  let count = 0;
  for (let i = 2; i <= max; i++) {
    count += prime[i];
    prime[i] = count;
  }

  for (let query of queries) {
    let [left, right] = query;
    console.log(prime[right] - prime[left - 1]);
  }
}

countPrimes(queries, 10);
