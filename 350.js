/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    const res = [];
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    for (const num of nums1) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    for (const num of nums2) {
        const val = map[num];
        if (val > 0) {
            res.push(num);
            map[num]--;
        }
    }
    return res;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const res = [];
    let p1 = p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] > nums2[p2]) {
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            res.push(nums2[p2]);
            p1++;
            p2++
        }
    }
    return res;
};