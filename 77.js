/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const helper = (startIndex, path) => {
        if (path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = startIndex; i <= (n - k + path.length + 1); i++) {
            path.push(i);
            helper(i + 1, path);
            path.pop();
        }
    }
    helper(1, []);
    return res;
};