  //Book Allocation
  //Exaplain: Given an array of integers A of size N and an integer B. College library has N books, the ith book has A[i] number of pages. You have to allocate books to B number of students so that maximum number of pages allocated to a student is minimum.
  
  //Input Format: The first argument given is the integer array A. The second argument given is the integer B.
  
  //Output Format: Return the minimum number of pages that can be allocated to a student.
  
  //Example Input: Input 1: A = [12, 34, 67, 90] B = 2
  //Example Output: Output 1: 113
  
  //Example Explanation: Explanation 1: There are 2 number of students. Books can be allocated in following fashion : [12] and [34, 67, 90]. Maximum number of pages allocated to a student is 113 which is minimum.
  
  function isPossible(A, B, mid) {
    let studentsRequired = 1;
    let currentPages = 0;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] + currentPages > mid) {
        studentsRequired++;
        currentPages = A[i];
      } else {
        currentPages += A[i];
      }
    }
  
    return studentsRequired <= B;
  }
  
  function booksBruteForce(A, B) {
    if (A.length < B) return -1;
  
    let low = Math.max(...A);
    let high = A.reduce((a, b) => a + b, 0);
    let result = -1;
  
    for (
      let maxAllocatedPages = low;
      maxAllocatedPages <= high;
      maxAllocatedPages++
    ) {
      if (isPossible(A, B, maxAllocatedPages)) {
        result = maxAllocatedPages;
        break;
      }
    }
    return result;
  }
  
  function booksBinarySearch(A, B) {
    let low = Math.max(...A);
    let high = A.reduce((a, b) => a + b, 0);
    let result = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (isPossible(A, B, mid)) {
        result = mid;
        high = mid - 1; // Try to find a smaller maximum
      } else {
        low = mid + 1; // Increase the maximum
      }
    }
    return result;
  }
  
  // Example usage:
  const A = [12, 34, 67, 90];
  const B = 2;
  console.log(booksBruteForce(A, B)); // Output: 113
  console.log(booksBinarySearch(A, B)); // Output: 113