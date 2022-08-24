/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let res = [];
    let queue = [];
    let visited = new Set();
    queue.push(s);
    while (true) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            s = queue.shift();
            if (isValid(s)) {
                res.push(s);
            } else if (res.length === 0) {
                for (let i = 0; i < s.length; i++) {
                    if (s[i] === '(' || s[i] === ')') {
                        let nexts = s.substring(0, i) + s.substring(i + 1);
                        if (!visited.has(nexts)) {
                            queue.push(nexts);
                            visited.add(nexts);
                        }
                    }
                }
            }
        }
        if (res.length > 0) {
            break;
        }
    }
    return res;
};

function isValid(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else if (s[i] === ')') {
            count--;
        }
        if(count < 0) {
            return false;
        }
    }
    return count === 0;
}