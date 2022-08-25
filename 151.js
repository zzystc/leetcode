/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};


/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let left = 0,
        right = s.length - 1,
        queue = [],
        word = '';
    while (s.charAt(left) === ' ') {
        left++;
    }
    while (s.charAt(right) === ' ') {
        right--;
    }
    while (left <= right) {
        let char  = s.charAt(left);
        if (char === ' ' && word) {
            queue.unshift(word);
            word = '';
        } else if (char !== ' ') {
            word += char;
        }
        left++;
    }
    queue.unshift(word);
    return queue.join(' ');
};