function isPrime(n) {
  let cnt = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      cnt++;
      if (i !== n / i) {
        cnt++;
      }
    }
  }
  return cnt == 2;
}

//1st Approch
function printPrimeDivisors(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (isPrime(i)) arr.push(i);
      if (i !== n / i && isPrime(n / i)) {
        arr.push(n / i);
      }
    }
  }
  console.log(arr.join(","));
}

//2nd Approach

function printPrimeDivisors2(n) {
  let arr = [];
  for (i = 2; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
      while (n % i == 0) {
        n = n / i;
      }
    }
  }
  console.log(arr.join());
}

function printPrimeDivisors3(n) {
  let arr = [];
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
      while (n % i == 0) {
        n = n / i;
      }
    }
  }
  if (n != 1) arr.push(n);
  console.log(arr.join());
}

printPrimeDivisors3(36);
