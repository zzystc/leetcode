/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let map = new Map();
    for (const wa of wall) {
        const len = wa.length;
        let waLen = 0;
        for (let i = 0; i < len - 1; i++) {
            waLen += wa[i];
            map.set(waLen, (map.get(waLen) || 0) + 1);
        }
    }
    let res = 0;
    for (const [i, mapi] of map.entries()) {
        res = Math.max(res, mapi);
    }
    return wall.length - res;
};