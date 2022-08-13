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
            const stringBoard = [...board];
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