/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let rows = isConnected.length;
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < rows; i++) {
        if (!visited.has(i)) {
            dfs(isConnected, visited, rows, i);
            count++;
        }
    }
    return count;
};

const dfs = (isConnected, visited, rows, i) => {
    for (let j = 0; j < rows; j++) {
        if (isConnected[i][j] === 1 && !visited.has(j)) {
            visited.add(j);
            dfs(isConnected, visited, rows, j);
        }
    }
}


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const rows = isConnected.length;
    const visited = new Set();
    let count = 0;
    const queue = new Array();
    for (let i = 0; i < rows; i++) {
        if (!visited.has(i)) {
            queue.push(i);
            while (queue.length !== 0) {
                const j = queue.shift();
                visited.add(j);
                for (let k = 0; k < rows; k++) {
                    if (isConnected[j][k] === 1 && !visited.has(k)) {
                        queue.push(k)
                    }
                }
            }
            count++;
        }
    }
    return count;
};


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    const rows = isConnected.length;
    const uf = new UnionFind(rows);

    for (let i = 0; i < rows; i++) {
        for (let j = i + 1; j < rows; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j);
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