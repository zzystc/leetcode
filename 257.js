/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    const dfs = (root, path = '') => {
        if (root) {
            path += root.val.toString();
            if (root.left === null && root.right === null) {
                paths.push(path);
            } else {
                path += '->';
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }
    dfs(root);
    return paths;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const res = [];
    if (root === null) {return res};
    const nodes = [root];
    const paths = [`${root.val}`];
    while (nodes.length !== 0) {
        const node = nodes.shift();
        const path = paths.shift();

        if (node.left === null && node.right === null) {
            res.push(path);
        } else {
            if (node.left !== null) {
                nodes.push(node.left);
                paths.push(path + '->' +node.left.val.toString());
            }
            if (node.right !== null) {
                nodes.push(node.right);
                paths.push(path + '->' + node.right.val.toString());
            }
        }
    }
    return res;
};