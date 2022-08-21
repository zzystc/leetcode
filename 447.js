/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let ans = 0;
    for (const p of points) {
        const m = new Map();
        for (const q of points) {
            const dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
            m.set(dis, (m.get(dis) || 0) + 1);
        }
        for (const [_, item] of m.entries()) {
            ans += item * (item - 1);
        }
    }
    return ans;
};