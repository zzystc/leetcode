/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let arr = [...str];
        arr.sort();
        let key  = arr.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return [...map.values()];
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = {};
    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let c of str) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : map[count] = [str];
    }
    return Object.values(map);
};