//Iterative Approach
function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;

    while(low<=high){
        const mid = low + Math.floor(high-low/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid]<target){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return -1;
}

//Recursive Approach
function binarySearchRecursive(low,high,target,arr){
    if(low<=high){
         const mid = low + Math.floor(high-low/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid]<target){
            return binarySearchRecursive(mid+1,high,target,arr);
        }
        else{
            return binarySearchRecursive(low,mid-1,target,arr)
        }
    }
    return -1
}

//Example usage:
const arr =[3, 4, 6, 7, 9, 12, 16, 17];
console.log(binarySearchRecursive(0,arr.length-1,6,arr));