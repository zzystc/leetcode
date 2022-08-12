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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const dfs = (root) => {
        if (root === null) {
            return 0;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        maxSum = Math.max(maxSum, left + right + root.val);
        const pathSum = root.val + Math.max(0, left, right);
        return pathSum < 0 ? 0 :pathSum;
    }
    dfs(root);
    return maxSum;
};