//Brute Force
function mySqurtBruteForce(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    if (i * i <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

//Binary Search
function mySqurtBinarySearch(n) {
  let low = 1;
  let high = n;
  let ans = 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

console.log(mySqurtBinarySearch(36));
