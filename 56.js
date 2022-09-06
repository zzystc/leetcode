/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let curr = intervals[0];
    let res = [];
    for (let interval of intervals) {
        if (curr[1] >= interval[0]) {
            curr[1] = Math.max(curr[1], interval[1]);
        } else {
            res.push(curr);
            curr = interval;
        }
    }
    res.push(curr);
    return res
};