/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 * The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

Example 1:

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 860 = 1021

 */
var addToArrayForm = function (num, k) {
  num.reverse();
  let i = 0;

  while (k > 0) {
    const digit = k % 10;
    i < num.length ? (num[i] += digit) : num.push(digit);

    const carry = Math.floor(num[i] / 10);
    num[i] %= 10;

    k = Math.floor(k / 10);
    k += carry;
    i++;
  }
  return num.reverse();
};

console.log(addToArrayForm([2, 1, 5], 806));
