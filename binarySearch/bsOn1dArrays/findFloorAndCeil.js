function findFloor(arr,x){
    let low = 0;
    let high = arr.length-1;
    let ans = -1

    while(low<=high){
        const mid = low + Math.floor(high-low/2);
        if(arr[mid]<=x){
            ans = arr[mid];
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return ans;
}

function findCeil(arr,x){
    let low = 0;
    let high = arr.length-1;
    let ans = -1

    while(low<=high){
        const mid = low + Math.floor(high-low/2);
        if(arr[mid]>=x){
            ans = arr[mid];
           high = mid-1
        }
        else{
           low = mid+1;
        }
    }
    return ans;
}

const arr = [3, 4, 4, 7, 8, 10];
const x = 5;

console.log(findFloor(arr,5))
console.log(findCeil(arr,5))