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