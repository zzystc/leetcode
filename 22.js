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

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    const res = [];
    const backtrack = (row) => {
        if (row === n) {
            const stringBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringBoard[i] = stringBoard[i].join('');
            }
            res.push(stringBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q';
                cols.add(col);
                diag1.add(row + col);
                diag2.add(row - col);
                backtrack(row + 1);
                board[row][col] = '.';
                cols.delete(col);
                diag1.delete(row + col);
                diag2.delete(row - col);
            }
        }
    }
    backtrack(0);
    return res;
};