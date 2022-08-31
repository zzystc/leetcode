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


/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let m = grid.length;
    if (m === 0) {return 0}
    let n = grid[0].length;
    const dummy = -1;
    const dirs = [[1, 0],
                  [0, 1]];
    const uf = new UnionFind(m * n);
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === '0') {
                uf.union(n * x + y, dummy);
            } else if (grid[x][y] === '1') {
                for (let d of dirs) {
                    let r = x + d[0];
                    let c = y + d[1];
                    if (r >= m || c >= n) continue;
                    if (grid[r][c] === '1') {
                        uf.union(n * x + y, n * r + c);
                    }
                }
            }
        }
    }
    return uf.getCount();
};

class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        this.size = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        this.count--;
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    find(x) {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    getCount() {
        return this.count;
    }
}