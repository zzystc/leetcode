/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let set = new Set();
    words.forEach(word => set.add(word));
    words.sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length);
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        for (let j = 1; j < words[i].length; j++) {
            if (!set.has(words[i].substring(0, j))) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            return words[i];
        }
    }
    return '';
};