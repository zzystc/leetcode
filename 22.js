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