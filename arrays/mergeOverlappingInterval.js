//Merge overlapping intervals

//Brute Force Approach
function mergeIntervalsBruteForce(intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    let start = currentInterval[0];
    let end = currentInterval[1];

    if (result.length !== 0 && end <= result[result.length - 1][1]) {
      continue;
    }

    for (let j = i + 1; j < intervals.length; j++) {
      const nextInterval = intervals[j];
      if (nextInterval[0] <= end) {
        end = Math.max(end, nextInterval[1]);
      } else {
        break;
      }
    }
    result.push([start, end]);
  }
  return result;
}

//Example usage:
const intervals = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
];

function mergeIntervalsBetter(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let n = intervals.length;
  let i = 0;

  while (i < n) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    let j = i + 1;
    while (j < n && intervals[j][0] <= end) {
      end = Math.max(end, intervals[j][1]);
      j++;
    }
    merged.push([start, end]);
    i = j;
  }
  return merged;
}

//Optimal Approach:
function mergeIntervalsOptimal(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];

  for (const interval of intervals) {
    let start = interval[0];
    let end = interval[1];

    if (merged.length === 0 || start > merged[merged.length - 1][1]) {
      merged.push([start, end]);
    } else if (start <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        end,
      );
    }
  }
  return merged;
}

console.log(mergeIntervalsBruteForce(intervals)); // Output: [[1, 4], [5, 8]]
