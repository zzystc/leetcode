/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let need = {},
        win = {};
    for (let a of p) {
        need[a] = (need[a] || 0) + 1;
    }
    let left = 0,
        right = 0,
        val = 0,
        res = [];
    while (right < s.length) {
        let c = s[right];
        right++;
        if (need[c]) {
            win[c] = (win[c] || 0) + 1;
            if (win[c] === need[c]) {
                val++;
            }
        }
        while (right - left >= p.length) {
            if (val === Object.keys(need).length) {
                res.push(left);
            }
            let d = s[left];
            left++;
            if (need[d]) {
                if (need[d] === win[d]) {
                    val--;
                }
                win[d]--;
            }
        }
    }
    return res;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const res = [], 
          win = {},
          need = {},
          pLen = p.length;
    let len = 0,
        val = 0;
    for (const x of p) {
        if (need[x] === undefined) {
            need[x] = win[x] = 0;
            len++;
        }
        need[x]++;
    }
    for (let i = 0; i < s.length; i++) {
        const j = i -pLen;
        if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
        if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
        if (val === len) res.push(j + 1)
    }
    return res;
};