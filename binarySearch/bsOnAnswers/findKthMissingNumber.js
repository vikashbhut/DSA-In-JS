  
  var findKthPositiveBruteForce = function (arr, k) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= k) {
        k++;
      } else {
        break;
      }
    }
    return k;
  };
  
  var findKthPositive = function (arr, k) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const missingCount = arr[mid] - (mid + 1); // Calculate how many numbers are missing up to arr[mid],
      // Example: arr[mid] = 7, mid = 3, missingCount = 7 - (3 + 1) = 3
  
      if (missingCount < k) {
        left = mid + 1; // Move right if we haven't found enough missing numbers
      } else {
        right = mid - 1; // Move left if we've found too many missing numbers
      }
    }
    // After the loop, right is the last index where the count of missing
    // numbers before arr[right] is still < k. Let missingBefore = arr[right] - (right + 1).
    // We still need (k - missingBefore) more numbers after arr[right], so the answer is:
    // arr[right] + (k - missingBefore) = (right + 1) + k. Hence we return right + 1 + k.
    //right+1 is nothing but low we can right low+k also
    return right + 1 + k; // The k-th missing number will be at position left + k
  };
  
  //Example usage:
  const arr = [2, 3, 4, 7, 11];
  const k = 5;
  console.log(findKthPositiveBruteForce(arr, k)); // Output: 9
  console.log(findKthPositive(arr, k)); // Output: 9
  