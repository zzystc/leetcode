/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    const generate = (str, left, right) => {
        if (str.length == 2 * n) {
            res.push(str);
            return;
        }
        if (left > 0) {
            generate(str + '(', left - 1, right);
        }
        if (right > left) {
            generate(str + ')', left, right - 1);
        }
    }
    generate('', n, n);
    return res;
};

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    if (n == 0) return [];
    const res = [],
          track = [];
    backtrack(n, n, track, res);
    return res;
    function backtrack(left, right, track, res) {
        if (left < 0 || right < 0) return;
        if (right < left) return;
        if (left === 0 && right === 0) {
            res.push(track.join(''));
            return;
        }
        track.push('(');
        backtrack(left - 1, right, [...track], res);
        track.pop();
        track.push(')');
        backtrack(left, right - 1, [...track], res);
        track.pop();
    }
};