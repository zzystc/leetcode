/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.sort((a, b) => (a & 1) - (b & 1));
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let l = 0,
        r = nums.length - 1;
    while (l !== r) {
        while (r > 0 && nums[r] & 1) {
            r--;
        }
        while (l < r && (nums[l] & 1) === 0) {
            l++;
        }
        [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    return nums;
};