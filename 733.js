/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const m = image.length,
          n = image[0].length,
          oldColor = image[sr][sc];
    if (oldColor == color) return image;
    
    const fill = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
            return;
        }
        image[i][j] = color;
        fill(i - 1, j);
        fill(i + 1, j);
        fill(i, j - 1);
        fill(i, j + 1);
    }
    fill(sr, sc);
    return image;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    const m = image.length,
          n = image[0].length,
          oldColor = image[sr][sc];
    if (oldColor == color) return image;
    const queue = [[sr,sc]];
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        image[x][y] = color;
        if (x + 1 < m && image[x + 1][y] == oldColor) queue.push([x + 1, y]);
        if (x - 1 >= 0 && image[x - 1][y] == oldColor) queue.push([x - 1, y]);
        if (y + 1 < n && image[x][y + 1] == oldColor) queue.push([x, y + 1]);
        if (y - 1 >= 0 && image[x][y - 1] == oldColor) queue.push([x, y - 1]);    
    }
    return image;
};