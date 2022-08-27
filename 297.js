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
    const queue = [root];
    let res = [];
    while (queue.length !== 0) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push('X');
        }
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === 'X') return null;
    const list = data.split(',');
    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1;
    
    while (cursor < list.length) {
        const node = queue.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];
        if (leftVal !== 'X') {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal !== 'X') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */