/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        bits[i] = countOnes(i);
    }
    return bits;
};

var countOnes = function(n) {
    let ones = 0;
    while (n > 0) {
        n &= n - 1;
        ones++
    }
    return ones;
}

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i & (i - 1)] + 1;
    }
    return bits;
};