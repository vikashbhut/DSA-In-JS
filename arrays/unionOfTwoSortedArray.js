/**
 *   arr1[] = [1,1,2,3,4,5]
 *   arr2[] = [2.3.4.4.5.6]
 *   union[] = [1,2,3,4,5,6]
 */

function brute(arr1, arr2) {
  const set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    set.add(arr2[i]);
  }
  console.log(Array.from(set));
}

function optimal(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let union = [];
  let left = 0,
    right = 0;

  while (left < n1 && right < n2) {
    if (arr1[left] <= arr2[right]) {
      if (union.length === 0 || union[union.length - 1] != arr1[left]) {
        union.push(arr1[left]);
      }
      left++;
    } else {
      if (union.length === 0 || union[union.length - 1] != arr2[right]) {
        union.push(arr2[right]);
      }
      right++;
    }
  }

  while (left < n1) {
    if (union.length === 0 || union[union.length - 1] != arr1[left]) {
      union.push(arr1[left]);
    }
    left++;
  }

  while (right < n2) {
    if (union.length === 0 || union[union.length - 1] != arr2[right]) {
      union.push(arr2[right]);
    }
    right++;
  }

  console.log(union);
}

optimal([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]);
