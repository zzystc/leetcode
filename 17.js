/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const res = [],
          map = {
              2: 'abc',
              3: 'def',
              4: 'ghi',
              5: 'jkl',
              6: 'mno',
              7: 'pqrs',
              8: 'tuv',
              9: 'wxyz',
          }
    const dfs = (curStr, i) => {
        if (i == digits.length) {
            res.push(curStr);
            return;
        }
        const letters = map[digits[i]];
        for (const l of letters) {
            dfs(curStr + l, i + 1);
        }
    }
    dfs('', 0);
    return res;
};