/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;        
    }
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};