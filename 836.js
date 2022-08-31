/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1, y1, x2, y2] = rec1,
          [x3, y3, x4, y4] = rec2;
    return !(x1 >= x4 || x3 >= x2 || y3 >= y2 || y1 >= y4);
};