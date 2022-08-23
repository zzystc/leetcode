/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let l = r = sum = 0,
        res = len + 1;
    while (r < len) {
        sum += nums[r++];
        while (sum >= target) {
            res = res < r - l ? res : r - l;
            sum -= nums[l++];
        }
    }
    return res > len ? 0 : res;
};