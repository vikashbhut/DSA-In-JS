/**
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 */

//1 Approach using map DS  TC = O(nlogm + m) SC = 0(m)

function singleNumberTwoUsingMap(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value == 1) {
      return key;
    }
  }
}

//2nd Approach using bit iteration TC = o(31*n) SC = o(1)

function singleNumberBitIteration(nums) {
  let ans = 0;
  for (let bitIndex = 0; bitIndex <= 31; bitIndex++) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] & (1 << bitIndex)) {
        count++;
      }
    }
    if (count % 3 == 1) {
      ans = ans | (1 << bitIndex);
    }
  }
  return ans;
}

//3rd Approach using sorting

function singleNumberSorting(nums) {
  //[0,1,0,1,0,1,99] => [0,0,0,1,1,1,91]
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i += 3) {
    if (nums[i] != nums[i - 1]) return nums[i - 1];
  }
  return nums[nums.length - 1];
}

//4th Approach bucket concept

function singleNumberBucket(nums) {
  let ones = 0,
    twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones;
}

console.log(singleNumberBucket([2, 2, 3, 2]));
