/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
 *  The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of 
bananas 
and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them
 instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 */

function findRequiredHours(piles, bananasPerHour) {
  let totalHours = 0;
  for (let i = 0; i < piles.length; i++) {
    totalHours += Math.ceil(piles[i] / bananasPerHour);
  }
  return totalHours;
}

function minEatingSpeedBruteForce(piles, h) {
  for (let i = 1; i < Math.max(...piles); i++) {
    const requiredHours = findRequiredHours(piles, i); //i banana per hr
    if (requiredHours <= h) {
      return i;
    }
  }
}

var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const requiredHours = findRequiredHours(piles, mid);
    if (requiredHours <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
