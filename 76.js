/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need = {};
    let window = {};
    for (let a of t) {
        need[a] = (need[a] || 0) + 1;
    }
    let left = 0,
        right = 0,
        valid = 0,
        start = 0,
        len = Number.MAX_VALUE;
    while (right < s.length){
        let c = s[right];
        right++;
        if (need[c]) {
            window[c] = (window[c] || 0) + 1;
            if (window[c] === need[c]) {
                valid++;
            }
        }
        while (valid == Object.keys(need).length) {
            if (right - left < len) {
                start = left;
                len = right -  left;
            }
            let d = s[left];
            left++;
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return len == Number.MAX_VALUE ? '' : s.substr(start, len);
};