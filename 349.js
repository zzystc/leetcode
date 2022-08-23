/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    if (set1.size > set2.size) {
        [set1, set2] = [set2, set1];
    }
    const intersection = new Set();
    for (const num of set1) {
        if (set2.has(num)) {
            intersection.add(num);
        }
    }
    return Array.from(intersection);
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const len1 = nums1.length,
          len2 = nums2.length;
    let index1 = index2 = 0;
    const intersection = [];
    while (index1 < len1 && index2 < len2) {
        const num1 = nums1[index1],
              num2 = nums2[index2];
        if (num1 === num2) {
            if (num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return intersection;
};