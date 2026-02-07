/**
 * Find the frequency of element
 * Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
	 5  2
        15  1
 */

function countFreqWithOutHashing(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      count++;
    }
  }
  return count;
}

function countFreq(arr, n) {
  let hash = new Array(Math.max(...arr) + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  return hash[n];
}

/**
 * Find the highest/lowest frequency element
 * 
 * Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.
 */

function countHigheshLowestFrequencyWithMap(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    let value = (map.get(array[i]) || 0) + 1;
    map.set(array[i], value);
  }

  let minFreq = array.length;
  let maxFreq = 0;

  let minElement = 0;
  let maxElement = 0;

  for (const [key, count] of map.entries()) {
    if (count < minFreq) {
      minFreq = value;
      minElement = key;
    }
    if (count > maxFreq) {
      maxFreq = value;
      maxElement = key;
    }
  }
  console.log(`Min Element and frequency= ${minElement}::${minFreq}`);
  console.log(`Max Element and frequency= ${maxElement}::${maxFreq}`);
}

function countHigheshLowestFrequencyBruteForce(array) {
  let visisted = new Array(array.length).fill(false);

  let minFreq = array.length;
  let maxFreq = 0;

  let minElement = 0;
  let maxElement = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    if (visisted[i] == true) {
      continue;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        visisted[j] = true;
        count++;
      }
    }
    if (count < minFreq) {
      minElement = array[i];
      minFreq = count;
    }
    if (count > maxFreq) {
      maxFreq = count;
      maxElement = array[i];
    }
  }

  console.log(`Min Element and frequency= ${minElement}::${minFreq}`);
  console.log(`Max Element and frequency= ${maxElement}::${maxFreq}`);
}

countHigheshLowestFrequencyBruteForce([10, 5, 10, 15, 10, 5]);
