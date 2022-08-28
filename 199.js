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
 * @return {number[]}
 */
var rightSideView = function(root) {
    function dfs(root, step, res) {
        if (root) {
            if (res.length === step) {
                res.push(root.val);
            }
            dfs(root.right, step + 1, res);
            dfs(root.left, step + 1, res);
        }
    }
    if (!root) return[];
    let arr = [];
    dfs(root, 0, arr);
    return arr;
};