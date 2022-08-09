/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) {
        return 0;
    }
    intervals.sort((a, b) => a[1] - b[1])
    const n =intervals.length;
    let right = intervals[0][1];
    let ans = 1;
    for (let i = 1; i < n; i++ ) {
        if (intervals[i][0] >= right) {
            ans++;
            right = intervals[i][1];
        }
    }
    return n - ans;
};