/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    let min = Infinity;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if(nums[low]<=nums[high]){
            min = Math.min(min,nums[low]);
            break;
        }
        if(nums[low]==nums[mid] && nums[mid]==nums[high]){
            min = Math.min(min,nums[low]);
            low++;
            high--;
            continue;
        }
        if(nums[low]<=nums[mid]){
            min = Math.min(min,nums[low]);
            low = mid+1;
        }
        else{
             min = Math.min(min,nums[mid]);
             low = mid-1;
        }
    }
    return min
};

console.log(findMin([3, 4, 5, 1, 2]))