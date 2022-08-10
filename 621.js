/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let arr = new Array(26).fill(0);
    for (let c of tasks) {
        arr[c.charCodeAt() - "A".charCodeAt()]++;
    }
    let max = 0;
    for (let i =0; i < 26; i++) {
        max = Math.max(max, arr[i]);
    }
    let ret = (max - 1) * (n + 1);
    for (let i = 0; i < 26; i++) {
        if (arr[i] == max) {
            ret++;
        }
    }
    return Math.max(ret, tasks.length)
};