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



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let p0 = 0,
        p2 = nums.length - 1;
    for (let i = 0; i <= p2; i++) {
        while (nums[i] === 2 && i < p2) {
            swap(nums, i, p2);
            p2--;
        }
        if (nums[i] === 0) {
            swap(nums, i, p0);
            p0++;
        }
    }
};

function swap(nums, index1, index2) {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const swap = (list, p1, p2) => [list[p1], list[p2]] = [list[p2], list[p1]];
    let red = 0,
        blue = nums.length - 1,
        p = 0;
    while (p <= blue) {
        switch (nums[p]) {
            case 0:
                swap(nums, red++, p++);
                break;
            case 1:
                p++;
                break;
            case 2:
                swap(nums, blue--, p);
                break;
            default:
                break;
        }
    }
};