function isPossible(nums, threshold, divisor) {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / divisor);
    }
    return sum <= threshold;
  }
  
  function smallestDivisorFinder(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);
    let result = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isPossible(nums, threshold, mid)) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }
  
  // Example usage:
  const nums = [1, 2, 5, 9];
  const threshold = 6;
  console.log(smallestDivisorFinder(nums, threshold)); // Output: 5
  
  

  
  



  
  
  
  