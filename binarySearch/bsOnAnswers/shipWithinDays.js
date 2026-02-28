  /**
   * 
   *A conveyor belt has packages that must be shipped from one port to another within days days.
  
  The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
  
  Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
   */
  
  function isShipPossible(weights, days, capacity) {
    let currentDay = 1;
    let currentLoad = 0;
  
    for (let weight of weights) {
      if (currentLoad + weight > capacity) {
        currentDay++;
        currentLoad = weight; // Start loading the next day with the current weight
      } else {
        currentLoad += weight; // Continue loading the current day
      }
  
      if (currentDay > days) {
        return false; // If we exceed the number of days, it's not possible
      }
    }
    return true; // All packages can be shipped within the given days
  }
  
  var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights); // Minimum capacity must be at least the heaviest package
    let right = weights.reduce((a, b) => a + b, 0); // Maximum capacity is the sum of all weights
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isShipPossible(weights, days, mid)) {
        right = mid - 1; // Try to find a smaller capacity
      } else {
        left = mid + 1; // Increase capacity
      }
    }
    return left; // The minimum capacity that can ship all packages within the given days
  };
  
  // Example usage:
  const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const days = 5;
  console.log(shipWithinDays(weights, days)); // Output: 15