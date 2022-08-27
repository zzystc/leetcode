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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {return true}
    const isMirror = (l, r) => {
        if (!l && !r) {return true}
        if (
            l && r && l.val === r.val &&
            isMirror(l.left, r.right) &&
            isMirror(l.right, r.left)
        ) {return true}
        return false;
    }
    return isMirror(root.left, root.right);
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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const isMirror = (l, r) => {
        const queue = [l, r];
        while (queue.length !== 0) {
            const u = queue.shift(),
                  v = queue.shift();
            if (!u && !v) continue;
            if (!u || !v || u.val !== v.val) return false;
            queue.push(u.left, v.right, u.right, v.left);
        }
        return true;
    }
    return isMirror(root.left, root.right);
};