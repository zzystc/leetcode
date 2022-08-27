/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let pQ = [p],
        qQ = [q],
        res = true;
    while (pQ.length !== 0) {
        let pNode = pQ.shift(),
            qNode = qQ.shift();
        if (pNode === null && qNode === null) {
            res = true;
        } else if (pNode === null || qNode === null) {
            res = false;
            break;
        } else {
            if (pNode.val !== qNode.val) {
                res = false;
                break;
            } else {
                pQ.push(pNode.left);
                pQ.push(pNode.right);
                qQ.push(qNode.left);
                qQ.push(qNode.right);
            }
        }
    }
    return res;
};