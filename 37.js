/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(row, col, val, board) {
        let len = board.length;
        for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
                return false;
            }
        }
        for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
                return false;
            }
        }
        let startRow = parseInt(row / 3) * 3,
            startCol = parseInt(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false;
                }
            }
        }
        return true;
    }
    function backTracking() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') continue;
                for (let val = 1; val < 10; val++) {
                    if (isValid(i, j, `${val}`, board)) {
                        board[i][j] = `${val}`;
                        if (backTracking()) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    backTracking();
    return board;
};