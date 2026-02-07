//Subsets
/**
 * Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
var subsets = function (nums) {
  const subsets = [];
  const noOfSubSets = 1 << nums.length;

  for (let i = 0; i < noOfSubSets; i++) {
    const sets = [];
    for (let j = 0; j <= nums.length - 1; j++) {
      if (i & (1 << j)) {
        sets.push(nums[j]);
      }
    }
    subsets.push(sets);
  }
  return subsets;
};

console.log(subsets([1, 2, 3]));
