/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * Input: nums = [2,2,1]
Output: 1
 */

var singleNumberBruteForce = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value == 1) {
      return key;
    }
  }
};

var singleNumber = function (nums) {
  let xor = 0;

  for (const num of nums) {
    xor = xor ^ num;
  }
  return xor;
};
