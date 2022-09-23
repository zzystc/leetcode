/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0),
          len = temperatures.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const stack = [],
          len = temperatures.length,
          res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if (!stack.length || temperatures[i] <= temperatures[stack[stack.length - 1]]) {
            stack.push(i);
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const j = stack.pop();
                res[j] = i - j;
            }
            stack.push(i);
        }
    }
    return res;
};