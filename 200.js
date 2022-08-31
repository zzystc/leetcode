/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                turnZero(i, j, grid);
            }
        }
    }
    return count;
};

function turnZero(i, j, grid) {
    if (i < 0 || i >= grid.length ||
        j < 0 || j >= grid[0].length || 
        grid[i][j] === '0') return;
    grid[i][j] = '0';
    turnZero(i, j + 1, grid);
    turnZero(i, j - 1, grid);
    turnZero(i + 1, j, grid);
    turnZero(i - 1, j, grid);
}


/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                grid[i][j] = '0';
                queue.push([i, j]);
                turnZero(queue, grid);
            }
        }
    }
    return count;
};

function turnZero(queue, grid) {
    const dirs = [[0, 1],
                  [0, -1],
                  [1, 0],
                  [-1, 0]];
    while (queue.length !== 0) {
        const cur = queue.shift();
        for (const dir of dirs) {
            const x = cur[0] + dir[0];
            const y = cur[1] + dir[1];
            if (x < 0 || x >= grid.length ||
                y < 0 || y >= grid[0].length ||
                grid[x][y] === '0') continue;
            grid[x][y] = '0';
            queue.push([x, y]);
        }
    }
} 