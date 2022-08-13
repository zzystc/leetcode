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

/**
 * @param {number[]} nums
 * @return {number}
 */
 function crossSum(nums, left, right, mid) {
    if (left === right) {
        return nums[left];
    }
    let leftMaxSum = Number.MIN_SAFE_INTEGER,
        leftSum = 0;
    for (let i = mid; i >= left; i--) {
        leftSum += nums[i];
        leftMaxSum = Math.max(leftMaxSum, leftSum);
    }
    let rightMaxSum = Number.MIN_SAFE_INTEGER,
        rightSum = 0;
    for (let i = mid + 1; i <= right; i++) {
        rightSum += nums[i];
        rightMaxSum = Math.max(rightMaxSum, rightSum);
    }
    return leftMaxSum + rightMaxSum;
}

function _maxSubArray(nums, left, right) {
    if (left === right) {
        return nums[left];
    }
    const mid = (left + right) >> 1;
    const lsum = _maxSubArray(nums, left, mid);
    const rsum = _maxSubArray(nums, mid + 1, right);
    const cross = crossSum(nums, left, right, mid);
    return Math.max(lsum, rsum, cross);
}

var maxSubArray = function(nums) {
    return _maxSubArray(nums, 0, nums.length - 1);
};