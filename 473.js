/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if (matchsticks.length < 4) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < matchsticks.length; i++) {
        sum += matchsticks[i];
    }
    if (sum % 4 !== 0) {
        return false;
    }
    matchsticks.sort((a, b) => b - a);
    let bucket = Array(4).fill(0);
    return backtracking(0, matchsticks, sum / 4, bucket);
    function backtracking(i, matchsticks, edge, bucket) {
        if (i === matchsticks.length) return true;
        for (let j = 0; j < 4; j++) {
            if (bucket[j] + matchsticks[i] > edge) continue;
            bucket[j] += matchsticks[i];
            if (backtracking(i + 1, matchsticks, edge, bucket)) {
                return true;
            }
            bucket[j] -= matchsticks[i];
        }
        return false;
    }
};