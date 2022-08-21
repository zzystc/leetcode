/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const countAB = new Map();
    nums1.forEach(
        u => nums2.forEach(
            v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)
        )
    )
    let ans = 0;
    for (let u of nums3) {
        for (let v of nums4) {
            if (countAB.has(- u - v)) {
                ans += countAB.get(- u - v);
            }
        }
    }
    return ans;
};