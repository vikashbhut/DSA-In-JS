function powerExponential(base, power) {
  let ans = 1;
  let isNegativePower = false;
  if (power < 0) {
    power = power * -1;
    isNegativePower = true;
  }
  while (power !== 0) {
    if (power % 2 == 1) {
      ans = ans * base;
      power = power - 1;
    } else {
      power = power / 2;
      base = base * base;
    }
  }
  if (isNegativePower) {
    ans = 1 / ans;
  }
  console.log(ans);
}

powerExponential(2.0, -2147483648);

//Brute force
function power(x, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= x;
  }
}
