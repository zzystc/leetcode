/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] === '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};


/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let maxLen = 0;
    let stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }
    return maxLen;
};


/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let maxLen = 0,
        left = 0,
        right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++
        } else {
            right++;
        }
        if (left === right) {
            maxLen = Math.max(maxLen, left + right);
        } else if (left < right) {
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLen = Math.max(maxLen, left + right);
        } else if (left > right) {
            left = right = 0;
        }
    }
    return maxLen;
};