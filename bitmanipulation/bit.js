function decimalToBinary(n) {
  let str = "";
  while (n > 0) {
    if (n % 2 == 0) str += "0";
    else str += "1";
    n = Math.trunc(n / 2);
  }
  // Reverse
  str = str.split("").reverse().join("");
  console.log(str);
}

function binaryToDecimal(binaryStr) {
  let ans = 0;
  let pow = 1; //2^0
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    ans += binaryStr[i] * pow;
    pow = pow * 2; // 2*1 = 2 2^1,  2*2=4 2^2; 4*2=8 2^3
  }
  console.log(ans);
}

function swapNumbersWithXOR(a, b) {
  /**
   *   a^a = 000
   *   b^b = 000
   *
   *   a = a^b
   *   b = a^b = (a^b)^b = a
   *   a = a^b = (a^b)^b = (a^b)^a = b
   *
   *
   */

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a, b);
}

function isKthBitSetBruteForce(n, k) {
  let binary = "";

  //Binary of given no
  while (n > 0) {
    binary += n % 2;
    n = Math.trunc(n / 2);
  }

  binary = binary.split("").reverse().join("");

  for (let i = binary.length - 1; i >= 0; i--) {
    if ((i = binary.length - 1 - k)) {
      return Boolean(Number(binary[i]));
    }
  }
  return false;
}

function isKthBitSetLeftShit(n, k) {
  console.log(Boolean(n & (1 << k)));
}

function isKthBitSetRightShit(n, k) {
  console.log(Boolean((n >> k) & 1));
}

function setKthBit(n, k) {
  // n = 9 => (1001)
  // 1<<k => (0001) < 2 => (0100)
  // 1001 | 0100 => (1101) => 13
  console.log(n | (1 << k));
}

function clearKthBit(n, k) {
  // n = 9 => (1001)  k=3
  // 1<<k => (0001)<<3 => 1000 => ~1000 => 0111
  // n & ~(1<<k) => 1001 & 0111 => 0001 => 3rd bit unuset

  console.log(n & ~(1 << k));
}

function toggleKthBit(n, k) {
  console.log(n ^ (1 << k));
}

function removeRightMostSetBit(n) {
  // n = 16 => 10000
  // n = 15 => 01111
  // n & (n-2) => 00000 => Able to set right most bit to 0

  console.log(n & (n - 1));
}

function checkPowerOfTwo(n) {
  if ((n & (n - 1)) == 0) return true;
  else return false;
}

function countSetBits(n) {
  let counter = 0;
  while (n > 1) {
    if (n % 2 == 1) counter++;
    n = Math.trunc(n / 2);
  }
  if (n == 1) counter++;
  console.log(counter);
}

function countSetBitsWithBitWise(n) {
  let counter = 0;
  while (n > 1) {
    counter += n & 1; // 101 & 001 -> 001 -> 1
    n = Math.trunc(n >> 1); // n/2^i => n/2
  }
  if (n == 1) counter++;
  console.log(counter);
}

function countSetBitsSecondApproach(n) {
  let counter = 0;
  while (n > 0) {
    counter++;
    n = n & (n - 1);
  }
  console.log(counter);
}

/**
 * Minimum Bit Flips to Convert Number
 *
 * Input: start = 10, goal = 7
Output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111
 */

var minBitFlips = function (start, goal) {
  let ans = start ^ goal;

  let minBitFlipsCount = 0;

  //Check no of set bit in number it's a count we have to flip
  while (ans > 0) {
    minBitFlipsCount += ans & 1;
    ans = ans >> 1;
  }
  return minBitFlipsCount;
};
