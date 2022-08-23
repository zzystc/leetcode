/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length,
        left = 0,
        right = len - 1,
        mid;
    for (let i = 0; i < len; i++) {
        left = i + 1;
        while (left <= right) {
            mid = (left + right) >> 1;
            if (numbers[mid] === target - numbers[i]) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [-1, -1];
};