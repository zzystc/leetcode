/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1,
            k = nums.length - 1,
            sum = 0;
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if (sum < target) {
                if (Math.abs(sum - target) < Math.abs(res - target)) {
                    res = sum;
                }
                j++;
            } else if (sum > target) {
                if (Math.abs(sum - target) < Math.abs(res - target)) {
                    res = sum;
                }
                k--;
            } else {
                return sum;
            }
        }
    }
    return res;
};