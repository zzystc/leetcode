/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let index = 0;
    const len = pushed.length;
    for (let i = 0; i < len; i++) {
        stack.push(pushed[i]);
        while (stack[stack.length - 1] === popped[index] && index < popped.length) {
            stack.pop();
            index++;
        }
    }
    return !stack.length;
};