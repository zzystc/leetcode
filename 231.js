/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let MAX = 1 << 30;
    return n > 0 && MAX % n === 0;
};