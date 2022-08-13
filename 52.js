/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n < 1) return;
    let count = 0;
    dfs(n, 0, 0, 0, 0);
    return count;

    function dfs(n, row, cols, diag1, diag2) {
        if (row == n) {
            count ++;
            return;
        }
        let bits = (~(cols | diag1 | diag2)) & ((1 << n) - 1);
        while (bits) {
            let p = bits & -bits;
            bits = bits & (bits - 1);
            dfs(n, row + 1, cols | p, (diag1 | p) << 1, (diag2 | p) >>> 1);
        }
    }
};