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
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    let ans = Infinity;
    if (root.left !== null) {
        ans = Math.min(minDepth(root.left), ans);
    }
    if (root.right !== null) {
        ans = Math.min(minDepth(root.right), ans);
    }
    return ans + 1;
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
 * @return {number}
 */
 var minDepth = function(root) {
    if (root === null) return 0;
    let q = [root];
    let depth = 1;
    while (q.length !== 0) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let cur = q.shift();
            if (cur.left === null && cur.right === null) {
                return depth;
            }
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        depth++;
    }
};