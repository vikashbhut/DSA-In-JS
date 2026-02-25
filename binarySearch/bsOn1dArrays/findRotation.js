function findRotation(nums){
     let low = 0;
    let high = nums.length - 1;
    let min = Infinity;
    let index = -1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (nums[low] <= nums[high]) {
            if(nums[low]<min){
                min = nums[low];
                index = low;
            }
            break;
        }
        else if(nums[low]==nums[mid]&&nums[mid]==nums[high]){
              if(nums[low]<min){
                min = nums[low];
                index = low;
            }
            low++;
            high--;
            continue;
        }
        else if (nums[low] <= nums[mid]) {
           if(nums[low]<min){
                min = nums[low];
                index = low;
            }
            low = mid + 1;
        }
        else {
           if(nums[mid]<min){
                min = nums[mid];
                index = mid;
            }
            high = mid - 1;
        }
    }
    return index;
}

//Example usage:
const arr = [4,5,6,7,0,1,2,3];
console.log(findRotation(arr))