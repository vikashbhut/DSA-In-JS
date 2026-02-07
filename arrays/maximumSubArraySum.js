/**
 * Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */

function brute(arr) {
  let maxsum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      maxsum = Math.max(maxsum, sum);
    }
  }
  console.log(maxsum);
}

function optimal(arr) {
  let maxi = arr[0],
    sum = 0;
  for (const element of arr) {
    sum += element;
    maxi = Math.max(maxi, sum);
    if (sum < 0) sum = 0;
  }
  console.log(maxi);
}

function printSubArrayWithLargestSum(arr) {
  let sum = 0,
    max = -Infinity,
    start = -1,
    end = -1;
  for (let i = 0; i < arr.length; i++) {
    if (sum == 0) start = i;
    sum += arr[i];
    if (sum > max) {
      max = sum;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(max, start, end);
}

printSubArrayWithLargestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
