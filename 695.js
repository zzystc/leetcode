/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length,
        col = grid[0].length;
    function dfs (x, y) {
        if (x < 0 || x >= row || y < 0 || y >=col || grid[x][y] === 0) return 0;
        grid[x][y] = 0;
        let ans = 1,
            dx = [-1, 1, 0, 0],
            dy = [0, 0, -1, 1];
        for (let i = 0; i < 4; i++) {
            ans += dfs(x + dx[i], y + dy[i]);
        }
        return ans;
    }
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }
    return res;
};

