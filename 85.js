/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    let res = 0;
    let heights = new Array(matrix[0].length).fill(0);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === '1') {
                heights[col]++;
            } else {
                heights[col] = 0;
            }
        }
        res = Math.max(res, largestRectangleArea(heights));
    }
    return res;
};

var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop();
            maxArea = Math.max(
                maxArea,
                heights[stackTopIndex] * (i - stack[stack.length - 1] - 1),
            )
        }
        stack.push(i);
    }
    return maxArea;
};