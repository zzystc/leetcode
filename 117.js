/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;

  const queue = [root];
  let cur;
  let level;

  while (queue.length) {
    level = queue.length;
    let i = 0;
    const temp = [];

    while (i++ < level) {
      cur = queue.shift();

      temp.push(cur);

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    temp.forEach((v, k) => {
      v.next = temp[k + 1] || null;
    });
  }

  return root;
};