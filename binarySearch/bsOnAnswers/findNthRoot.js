//Brute force
function findNthRoot(M, N) {
  for (let i = 1; i <= M; i++) {
    const result = Math.pow(i, N);
    if (result == M) {
      return i;
    } else if (i > M) {
      break;
    }
  }
  return -1;
}

console.log(findNthRoot(36, 2));

// //Binary Search

function power(mid, N, M) {
  let ans = 1;
  for (let i = 1; i <= N; i++) {
    ans = ans * mid;
    if (ans > M) return 2;
  }
  if (ans === M) return 1;
  return 0;
}

function findNthRootBinarySearch(M, N) {
  let low = 1;
  let high = M;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const result = power(mid, N, M);
    if (result === 1) {
      return mid;
    } else if (result === 2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(findNthRootBinarySearch(36, 2));
