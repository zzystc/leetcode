/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [];
    let res = (dp[0] = nums[0]);
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i];
        if (dp[i - 1] > 0) {
            dp[i] += dp[i - 1];
        }
        res = Math.max(dp[i], res);
    }
    return res; 
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let pre = 0,
        maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    })
    return maxAns;
};