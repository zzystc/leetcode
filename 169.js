/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length >> 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let half = nums.length / 2;
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if (obj[num] > half) return num;
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let count = 1,
        majority = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
};