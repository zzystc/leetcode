/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0,
        p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(nums, i, p1);
            p1++;
        } else if (nums[i] === 0) {
            swap(nums, i, p0);
            if (p0 < p1) {
                swap(nums, i, p1)
            }
            p0++;
            p1++;
        }
    }
};

function swap(nums, index1, index2) {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
