function findFirstOccurence(arr,target){
    let ans = -1;
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        const mid = low + Math.floor(high-low/2);
        if(arr[mid] === target){
            ans = mid;
            high = mid-1;
        }
        else if(arr[mid]<target){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return ans;
}

function findLastOccurence(arr,target){
    let ans = -1;
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        const mid = low + Math.floor(high-low/2);
        if(arr[mid] === target){
            ans = mid;
            low = mid+1;
        }
        else if(arr[mid]<target){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return ans;
}

function firstAndLastOccurrence(arr, target) {
  const first = findFirstOccurence(arr, target);
  const last = findLastOccurence(arr, target);
  return { first, last };
}

//Example usage:
const arr = [1, 2, 2, 3, 4, 4, 4, 5];
const target = 4;
const result = firstAndLastOccurrence(arr, target);
console.log(result); // Output: { first: 4, last: 6 }

//Other approach
//We can do lower boung for first & upper bount -1 for last occurrence
