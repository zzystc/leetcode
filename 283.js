/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let left = 0,
        right = 0;
    while (nums[right] !== undefined) {
        if (nums[right] !== 0) {
            swap(nums, left, right);
            left++;
        }
        right++
    }    
};

function swap(nums, left, right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
}