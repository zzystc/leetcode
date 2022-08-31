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