/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]


Let's imagine you're in charge of a high-tech building with 
a security system that monitors various rooms. 
The building's layout can be visualized as a grid (matrix),
 where each cell in the grid represents a room. The value in each cell can either be:

1: The room is secure and everything is functioning normally.
0: The room has a security breach (e.g., a broken window, unauthorized entry, etc.).
The building's protocol is to lock down (disable) any room and its neighboring rooms (in the same row and column) immediately if a breach is detected. This ensures that the breach can't spread to other areas.
 */

//Helper function to set a specific row to zero
function setRowValue(matrix, row, value) {
  for (let col = 0; col < matrix[0].length; col++) {
    const currentValue = matrix[row][col];
    if (currentValue !== 0) matrix[row][col] = value;
  }
}

function setColValue(matrix, col, value) {
  for (let row = 0; row < matrix.length; row++) {
    const currentValue = matrix[row][col];
    if (currentValue !== 0) matrix[row][col] = value;
  }
}

//Brute Force Approach
function setZerosBruteForce(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        //Set row to zero
        setRowValue(matrix, row, -1);
        //Set col to zero
        setColValue(matrix, col, -1);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === -1) {
        matrix[row][col] = 0;
      }
    }
  }
}

//Better Approach
function setZerosBetter(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowSet = new Set();
  const colSet = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        rowSet.add(row);
        colSet.add(col);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rowSet.has(row) || colSet.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}

//Optimal Approach
function setZerosOptimal(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let col0 = matrix[0][0];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        //Mark the first element of the row
        matrix[row][0] = 0;
        //Mark the first element of the column
        if (col === 0) {
          col0 = 0;
        } else {
          matrix[0][col] = 0;
        }
      }
    }
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  //Handle first row
  if (matrix[0][0] === 0) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }
  //Handle first column
  if (col0 === 0) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
}

//Example usage:
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZerosOptimal(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]
