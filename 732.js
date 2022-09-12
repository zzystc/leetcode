var MyCalendarThree = function() {
    this.tree = new Map();
    this.lazy = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.update(start, end - 1, 0, 10**9, 1);
    return this.tree.get(1) || 0;
};

MyCalendarThree.prototype.update = function(start, end, l, r, idx) {
    if (r < start || end < l) {return};
    if (start <= l && r <= end) {
        this.tree.set(idx, (this.tree.get(idx) || 0) + 1);
        this.lazy.set(idx, (this.lazy.get(idx) || 0) + 1);
    } else {
        const mid = (l + r) >> 1;
        this.update(start, end, l, mid, 2 * idx);
        this.update(start, end, mid + 1, r, 2 * idx + 1);
        this.tree.set(idx, (this.lazy.get(idx) || 0) + 
                            Math.max((this.tree.get(2 * idx) || 0),
                            (this.tree.get(2 * idx + 1) || 0)))
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */


 var MyCalendarThree = function() {
    this.planMap = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.planMap[start] = (this.planMap[start] || 0) + 1;
    this.planMap[end] = (this.planMap[end] || 0) - 1;
    let res = 0,
        count = 0;
    for (let item of Object.values(this.planMap)) {
        count += item;
        res = Math.max(res, count);
    }
    return res;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */