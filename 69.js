/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0,
        right = x;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (mid * mid <= x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};