/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * 
 * 
 */

const longestConsecutiveBrute = function (nums) {
  let maxSequence = 0;

  for (const num of nums) {
    let currentNum = num;
    let currentSequence = 1;

    while (nums.includes(currentNum + 1)) {
      currentNum++;
      currentSequence++;
    }
    maxSequence = Math.max(maxSequence, currentSequence);
  }
  return maxSequence;
};

const longestConsecutiveBetter = function (nums) {
  nums.sort((a, b) => a - b);
  let maxSequence = 0;
  let currentSequence = 0;
  let previousNum = null;
  for (const num of nums) {
    if (previousNum === null || previousNum + 1 === num) {
      currentSequence++;
      previousNum = num;
      maxSequence = Math.max(maxSequence, currentSequence);
    } else if (previousNum === num) {
      continue;
    } else {
      currentSequence = 1;
      previousNum = num;
    }
  }
  return maxSequence;
};

const longestConsecutiveOptimal = (nums) => {
  const numSet = new Set(nums);
  let maxSequence = 0;

  for (const num of numSet) {
    let currentSequence = 1;
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }
      maxSequence = Math.max(maxSequence, currentSequence);
    }
  }
  return maxSequence;
};

//Example usage:
console.log(longestConsecutiveOptimal([100, 4, 200, 1, 3, 2]));
