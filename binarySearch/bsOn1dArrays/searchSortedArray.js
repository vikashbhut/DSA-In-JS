function searchSortedUnique(arr,target){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        const mid = low + Math.floor((high-low)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[low]<=arr[mid]){
            if(arr[low]<=target && arr[mid]>target){
                high = mid-1
            }
            else{
                low = mid+1;
            }
        }
        else{
              if(arr[mid]<=target && arr[high]>target){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
    }
    return -1;
}

//Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchSortedUnique(nums, target)); // Output: 4

function searchSortedDuplicate(arr,target){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        const mid = low + Math.floor((high-low)/2);
        if(arr[mid] === target){
            return true;
        }
        else if(arr[low]==arr[mid] && arr[mid]==arr[high]){
          low++;
          high--;
        continue;
        }
         else if(arr[low]<=arr[mid]){
            if(arr[low]<=target && arr[mid]>=target){
                high = mid-1
            }
            else{
                low = mid+1;
            }
        }
        else{
              if(arr[mid]<=target && arr[high]>=target){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
    }
    return false;
}


//Example usage:
console.log(searchSortedDuplicate([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(searchSortedDuplicate([2, 5, 6, 0, 0, 1, 2], 3)); // false
console.log(searchSortedDuplicate([3, 3, 3, 4, 1, 2, 3, 3, 3, 3], 4)); // true