/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    const queue = [];
    queue.push([beginWord, 1]);
    while (queue.length !== 0) {
        const [word, level] = queue.shift();
        if (word === endWord) {
            return level;
        }
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c < 123; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let begSet = [],
        endSet = [];
    begSet.push(beginWord);
    endSet.push(endWord);
    
    let n = 1;
    while (begSet.length > 0) {
        const nextbegins = [];
        if (begSet.length > endSet.length) {
            [begSet, endSet] = [endSet, begSet];
        }
        for (let k = 0; k < begSet.length; k++) {
            let m = begSet[k];
            for (let i = 0; i < m.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    let newm = m.slice(0, i) + String.fromCharCode(c) + m.slice(i + 1);
                    if (endSet.includes(newm)) {
                        return n + 1;
                    }
                    if (wordSet.has(newm)) {
                        nextbegins.push(newm);
                        wordSet.delete(newm);
                    }
                }
            }
        }
        begSet = nextbegins;
        n++;
    }
    return 0;
};