/**
 *
 * 20 = 1,20,4,5,10,2
 * 40 = 1,20,2,4,5,8
 *
 */

function findGcd(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}

function betterTCfindGcd(n1, n2) {
  let gcd = 1;
  for (let i = Math.min(n1, n2); i >= 1; i--) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
      break;
    }
  }
  console.log(gcd);
}

function gcdEuclidean(n1, n2) {
  let gcd = 1;
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 % n2;
    else n2 = n2 % n1;
  }
  if (n1 == 0) gcd = n2;
  else gcd = n1;
  console.log(gcd);
}

function gcdRecursive(a, b) {
  if (a == 0) return b;
  if (b == 0) return a;

  if (a > b) return gcdRecursive(b, a % b);
  else return gcdRecursive(a, b % a);
}

console.log(gcdRecursive(36, 105));
