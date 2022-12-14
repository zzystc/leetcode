/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    for (let n of deck) {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    }
    let arr = Array.from(map.values());
    let res = arr[0];
    return arr.every(i => (res = gcd(res, i)) > 1);
};

let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));