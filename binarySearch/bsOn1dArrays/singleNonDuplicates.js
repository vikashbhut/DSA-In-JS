/**
 * @param {number[]} nums
 * @return {number}
 * 
 * You are given a sorted array consisting of only integers where every element 
 * appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
 * 
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1 || nums[0]!==nums[1])return nums[0];

    if(nums[nums.length-1]!==nums[nums.length-2])return nums[nums.length-1];

    let low = 1;
    let high = nums.length-2;

    while(low<=high){
        const mid = low + Math.floor((high-low)/2);
        if(nums[mid]!==nums[mid-1]&&nums[mid]!==nums[mid+1])return nums[mid];
        else if((nums[mid]==nums[mid-1]&&(mid&1)==1) || nums[mid]==nums[mid+1]&&(mid&1)==0) low = mid+1;
        else high = mid-1;
    }
    return -1;
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))