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