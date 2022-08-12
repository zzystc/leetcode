/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0,
        L = 0,
        R = 0;
    while (R < k) {
        if (vowels.has(s[R])) {
            count++;
        }
        R++;
    }
    let max = count;
    while (R < s.length) {
        if (vowels.has(s[R])) {
            count++
        }
        if (vowels.has(s[L])) {
            count--;
        }
        L++;
        R++;
        max = Math.max(max, count)
    }
    return max;
};