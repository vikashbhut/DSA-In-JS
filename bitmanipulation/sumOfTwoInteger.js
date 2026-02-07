/**
 * https://leetcode.com/problems/sum-of-two-integers/
 * Time O(1) | Space O(1)
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const [xor, carry] = [a ^ b, (a & b) << 1];

    a = xor;
    b = carry;
  }

  return a;
};

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  num.reverse();
  let i = 0;
  while (k > 0) {
    const digit = k % 10;
    if (i > num.length) {
      num.push(digit);
    } else {
      num[i] = num[i] + digit;
    }
    const carry = Math.floor(num[i] / 10);
    num[i] = num[i] % 10;
    k = Math.floor(k / 10);
    k += carry;
    i++;
  }
  return num.reverse();
};
