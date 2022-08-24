/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const n = nums.length;
    let j = 1;
    for (let i = 0; i < n; i += 2) {
        if (nums[i] & 1) {
            while (nums[j] & 1) {
                j += 2;
            }
            swap(nums, i, j);
        }
    }
    return nums;
};

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}