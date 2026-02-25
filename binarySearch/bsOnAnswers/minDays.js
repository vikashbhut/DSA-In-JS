/**
 * 
 *You are given an integer array bloomDay, an integer m and an integer k.

You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.
 */

function isPossible(bloomDay, day, k, m) {
  let count = 0;
  let maxBouquets = 0;

  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= day) {
      count++;
    } else {
      maxBouquets += Math.floor(count / k);
      count = 0;
    }
  }
  maxBouquets += Math.floor(count / k);
  return maxBouquets >= m;
}

function minDaysBruteForce(bloomDay, m, k) {
  for (let day = Math.min(...bloomDay); day <= Math.max(...bloomDay); day++) {
    const result = isPossible(bloomDay, day, k, m);
    if (result) {
      return day;
    }
  }
}

const bloomDay = [1, 10, 3, 10, 2];
const m = 3;
const k = 1;

var minDays = function (bloomDay, m, k) {
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let ans = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (isPossible(bloomDay, mid, k, m)) {
      high = mid - 1;
      ans = mid;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 2));
