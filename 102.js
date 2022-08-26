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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const queue = [root];
    while (queue.length !== 0) {
        const currentLevelSize = queue.length;
        res.push([]);
        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift();
            res[res.length - 1].push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return res;
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    dfs(root, 0, res);
    return res;
};

function dfs(root, step, res) {
    if (root) {
        if (!res[step]) res[step] = [];
        res[step].push(root.val);
        dfs(root.left, step + 1, res);
        dfs(root.right, step + 1, res);
    }
}


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
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }
    const queue = [root];
    const res = [];

    while (queue.length !== 0) {
        const subRes = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            subRes.push(cur.val);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.unshift(subRes);
    }
    return res;
};