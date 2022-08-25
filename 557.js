/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split('').reverse().join(''));
    }
    return res.join(' ');
};


/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let arr = s.split('');
    let l = r = 0;
    while (l < arr.length) {
        while (arr[r] && arr[r] !== ' ') {
            r++;
        }
        for (let i = l, j = r - 1; i < j; i++, j--) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        l = r + 1;
        r++;
    }
    return arr.join('');
};