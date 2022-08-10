/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    return search_interval(nums, target, 0, nums.length - 1);
};

function search_interval(nums, target, left, right) {
    if (left > right) {
        return -1;
    }
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] < target) {
        return search_interval(nums, target, mid + 1, right);
    } else {
        return search_interval(nums, target, left, mid - 1);
    }
}