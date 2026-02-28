  //Aggressive cows
  //Exaplain: Given an array of stall positions and a number of cows, determine the largest minimum distance between any two cows when placed in the stalls.
  
  function canPlaceCows(stalls, cows, distance) {
    let count = 1; // Place the first cow in the first stall
    let lastPosition = stalls[0];
  
    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastPosition >= distance) {
        count++;
        lastPosition = stalls[i];
      }
      if (count >= cows) {
        return true; // Successfully placed all cows with the given distance
      }
    }
  }
  
  function aggressiveCowsBruteForce(stalls, cows) {
    stalls.sort((a, b) => a - b); // Sort the stall positions
    for (
      let distance = 0;
      distance <= stalls[stalls.length - 1] - stalls[0];
      distance++
    ) {
      if (canPlaceCows(stalls, cows, distance)) {
        continue; // Try for a larger distance
      } else {
        return distance - 1; // Return the largest minimum distance found
      }
    }
  }
  
  function aggressiveCows(stalls, cows) {
    stalls.sort((a, b) => a - b); // Sort the stall positions
    let left = 0; // Minimum distance
    let right = stalls[stalls.length - 1] - stalls[0]; // Maximum distance
    let result = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (canPlaceCows(stalls, cows, mid)) {
        result = mid; // Update result with the largest minimum distance found
        left = mid + 1; // Try for a larger distance
      } else {
        right = mid - 1; // Try for a smaller distance
      }
    }
    return result;
  }
  
  // Example usage:
  const stalls = [1, 2, 4, 8, 9];
  const cows = 3;
  console.log(aggressiveCows(stalls, cows)); // Output: 3 (Place cows at positions 1, 4, and 8)
  