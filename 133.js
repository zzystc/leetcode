/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {return}
    const visited = new Map();
    const dfs = (n) => {
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne);
            }
            nCopy.neighbors.push(visited.get(ne));
        })
    }
    dfs(node);
    return visited.get(node)
};


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    if (!node) {return}
    const visited = new Map();
    visited.set(node, new Node(node.val));
    const queue = [node];
    while (queue.length !== 0) {
        const n = queue.shift();
        n.neighbors.forEach(ne => {
            if (!visited.has(ne)) {
                queue.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        })
    }
    return visited.get(node);
};