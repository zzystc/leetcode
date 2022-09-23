/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    s = '+' + s;
    const n = s.length,
          stack = [];
    let i = 0;
    while (i < n) {
        if (s[i] === '+'){
            i++;
            let cur = '';
            while (i < n && 0 <= s[i] && s[i] <= 9) {
                cur+=s[i];
                i++;
            }
            stack.push(cur);
        }
        if (s[i] === '-') {
            i++;
            let cur = '';
            while (i < n && 0 <= s[i] && s[i] <= 9) {
                cur+=s[i];
                i++;
            }
            cur = '-' + cur;
            stack.push(cur);
        }
        if (s[i] === '*') {
            i++;
            let cur = '';
            while (i < n && 0 <= s[i] && s[i] <= 9) {
                cur+=s[i];
                i++;
            }
            cur = cur * stack.pop();
            stack.push('' + cur);
        }
        if (s[i] === '/') {
            i++;
            let cur = '';
            while (i < n && 0 <= s[i] && s[i] <= 9) {
                cur+=s[i];
                i++;
            }
            const pre = stack.pop();
            if (pre >= 0){
                cur = Math.floor(pre / cur);
            } else {
                cur = Math.ceil(pre / cur)
            }
            stack.push('' + cur);
        }
    }
    let res = 0;
    while (stack.length !== 0) {
        res+=Number(stack.pop());
    }
    return res;
};