/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length,
          n = matrix[0].length;
    let low = 0,
        high = m * n - 1;
    while (low <= high) {
        const mid = (low + high) >> 1,
              x = matrix[mid / n | 0][mid % n];
        if (x < target) {
            low = mid + 1;
        } else if (x > target) {
            high = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};