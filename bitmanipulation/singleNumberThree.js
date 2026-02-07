/**
 * Given an integer array nums, in which exactly two elements appear only once and all the other 
 * elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
 */

var singleNumber = function (nums) {
  let xor = 0,
    bucket_one = 0,
    bucket_two = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  let rightMost = (xor & (xor - 1)) ^ xor;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & rightMost) {
      bucket_one = bucket_one ^ nums[i];
    } else {
      bucket_two = bucket_two ^ nums[i];
    }
  }
  console.log([bucket_one, bucket_two]);
};
singleNumber([1, 2, 1, 3, 2, 5]);
