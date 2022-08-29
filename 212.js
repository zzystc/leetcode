/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();
    const dxys = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0]
    ];
    const xLen = board.length,
          yLen = board[0].length;
    const visited = {};
    const ret = [];
    for (let word of words) {
        trie.insert(word);
    }

    const dfs = (x, y, nodes, str) => {
        if (nodes[board[x][y]].isEnd) {
            ret.push(str + board[x][y]);
            nodes[board[x][y]].isEnd = false;
        }

        nodes = nodes[board[x][y]];
        str += board[x][y];

        visited[x * 100 + y] = true;
        for (let [dx, dy] of dxys) {
            const newX = x + dx,
                  newY = y + dy;
            if (
                newX < 0 ||
                newY < 0 ||
                newX >= xLen ||
                newY >= yLen ||
                !nodes[board[newX][newY]] ||
                visited[newX * 100 + newY] === true
            ) continue;
            dfs(newX, newY, nodes, str);
        }
        visited[x * 100 + y] = false;
    }

    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (trie.children[board[x][y]]) {
                dfs(x, y, trie.children, '');
            }
        }
    }

    return ret;
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