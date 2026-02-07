function printDivisor(n) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  console.log(arr.sort((a, b) => a - b).join(","));
}

function printDivisor(n) {
  let arr = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  console.log(arr.sort((a, b) => a - b).join(","));
}
printDivisor(36);

/**
 *  No Of Divisors = m
 *  Input = n
 *  Time Complexity = O(sqrt(n)) + O(mlog2m) + 1
 */
