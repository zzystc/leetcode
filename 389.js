/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const cnt = new Array(26).fill(0);
    for (const ch of s) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const ch of t) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return ch;
        }
    }
    return '';
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let as = 0,
        at = 0;
    for (let i = 0; i < s.length; i++) {
        as += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        at += t[i].charCodeAt();
    }
    return String.fromCharCode(at - as);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};