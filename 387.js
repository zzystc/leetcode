/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counts = new Array(26).fill(0);
    for (const c of s) {
        counts[c.charCodeAt() - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (counts[s[i].charCodeAt() - 97] === 1) {
            return i;
        }
    }
    return -1;
};


/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const position = new Map();
    const q = [];
    for (let [i, ch] of [...s].entries()) {
        if (!position.has(ch)) {
            position.set(ch, i);
            q.push([ch, i]);
        } else {
            position.set(ch, -1);
            while (q.length && position.get(q[0][0]) === -1) {
                q.shift();
            }
        }
    }
    return q.length ? q[0][1] : -1;
};