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