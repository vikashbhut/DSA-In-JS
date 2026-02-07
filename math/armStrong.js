function isArmStrong(n) {
  let result = 0;
  let x = n;
  while (x > 0) {
    let lastDigit = x % 10;
    result += lastDigit * lastDigit * lastDigit;
    x = Math.trunc(x / 10);
  }
  console.log(result == n);
}

isArmStrong(1634);
