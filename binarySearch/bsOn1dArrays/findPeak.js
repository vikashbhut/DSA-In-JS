/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;

  if (nums[0] > nums[1]) return 0;

  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  let low = 1;
  let high = nums.length - 2;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid - 1] < nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums))
