
//smallest index such that arr[i] > x
export function upperBound(arr,target){
 let low = 0;
 let high = arr.length-1;
 let ans = arr.length; //Default index set to array length

 while(low<=high){
    const mid = low+Math.floor(high-low/2);
    if(arr[mid]>target){
        ans = mid;
        high = mid-1;
    }
    else{
        low = mid+1;
    }
 }
 return ans;
}

//Example usage:
const arr = [3, 5, 8, 15, 19];         // Sorted input array
const target = 9;                           // Target value

console.log(upperBound(arr,target))