/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => (a - b));
    let ans = 0,
        left = 0;
        right = people.length - 1
    while (left <= right) {
        if ((people[left] + people[right--]) <= limit) {
            left++;
        }
        ans++;
    }
    return ans;
};