/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const res = [],
          path = [];
    const helper = (startIndex) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            helper(i + 1);
            path.pop();
        }
    }
    helper(1);
    return res;
};