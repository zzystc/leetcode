/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) {
        return false;
    }
    sum /= 2;
    let dp = Array.from(new Array(n + 1), () => new Array(sum + 1).fill(false));
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }
    for (let i = 1; i <= n; i++) {
        let num = nums[i - 1];
        for (let j = 1; j <= sum; j++) {
            if (j - num < 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
        }
    }
    return dp[n][sum];
};