//Brute Force
function XOR(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans ^ i;
  }
  return ans;
}

//Optimize
function XOROptimize(n) {
  if (n % 4 == 0) return n;
  else if (n % 4 == 1) return 1;
  else if (n % 4 == 2) return n + 1;
  else if (n % 4 == 3) return 0;
}

function XORInRange(l, r) {
  // XOR(3) = 1^2^3  ^ XOR(7) = 1^2^3^4^5^6^7
  return XOROptimize(r) ^ XOROptimize(l - 1);
}
