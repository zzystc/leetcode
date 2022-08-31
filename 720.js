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


/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    const trie = new Trie();
    words.forEach(word => {
        trie.insert(word);
    })
    let res = '';
    const _helper = (nodes, path) => {
        if (path.length > res.length || (res.length === path.length && res > path)) {
            res = path;
        }
        for (const [key, value] of Object.entries(nodes)) {
            if (value.isEnd === true) {
                path += key;
                _helper(value, path);
                path = path.slice(0, -1);
            }
        }
    }
    _helper(trie.children, '');
    return res;
};

var Trie = function() {
    this.children = {};
}

Trie.prototype.insert = function(word) {
    let nodes = this.children;
    for (const ch of word) {
        if (!nodes[ch]) {
            nodes[ch] = {};
        }
        nodes = nodes[ch];
    }
    nodes.isEnd = true;
}