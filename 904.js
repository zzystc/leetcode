/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0,
        maxLen = 0,
        n = 0,
        arr = [fruits[l]];
        
    for (let r = 0; r < fruits.length; r++) {
        if (!arr.includes(fruits[r])) {
            if (arr.length <= 1) {
                arr[1] = fruits[r];
            } else {
                l = n;
                arr[0] = fruits[r - 1];
                arr[1] = fruits[r];
            }
        }
        if (fruits[r] !== fruits[n]) {
            n = r;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }    
    return maxLen;
};