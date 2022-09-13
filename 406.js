/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if (!people || !people.length) {return []};
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);

    const res = [];
    people.forEach(item => {
        res.splice(item[1] , 0, item);
    })
    return res;
};