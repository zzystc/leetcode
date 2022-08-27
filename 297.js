/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return 'X';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');
    const bulidTree = (list) => {
        const rootVal = list.shift();
        if (rootVal === 'X') {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = bulidTree(list);
        root.right = bulidTree(list);
        return root;
    }
    return bulidTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */