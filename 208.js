var Trie = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let nodes  = this.children;
    for (const ch of word) {
        if (!nodes[ch]) {
            nodes[ch] = {};
        }
        nodes = nodes[ch];
    }
    nodes.isend = true;
};

Trie.prototype.searchPrefix = function(prefix) {
    let nodes = this.children;
    for (const ch of prefix) {
        if (!nodes[ch]) {
            return false;
        }
        nodes = nodes[ch];
    }
    return nodes;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let nodes = this.searchPrefix(word);
    return nodes !== undefined && nodes.isend !== undefined;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */