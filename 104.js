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
var maxDepth = function(root) {
    if (!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
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
 var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }
    const queue = [root];
    let deepth = 1;
    while (queue.length !== 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
            }
        if (queue.length !== 0) {
            deepth++;
        }
    }
    return deepth;
};