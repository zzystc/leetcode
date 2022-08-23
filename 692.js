/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {};
    words.forEach(v => map[v] = (map[v] || 0) + 1);
    const keys = Object.keys(map).sort((a, b) => map[b] - map[a] || a.localeCompare(b));
    return keys.slice(0, k)
};


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const map = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    const priorityQueue = new Heap((a, b) => {
        return a[1] === b[1] ? b[0].localeCompare(a[0]) : a[1] - b[1];
    })
    for (const entry of map.entries()) {
        priorityQueue.offer(entry);
        if (priorityQueue.size() > k) {
            priorityQueue.poll();
        }
    }
    const ret = [];
    for (let i = priorityQueue.size() - 1; i >= 0; i--) {
        ret[i] = priorityQueue.poll()[0];
    }
    return ret;
};

class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;
        this.heapify();
    }
    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = this.size() >> 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const res = this.data[0];
        const last = this.data.pop();
        if (this.size !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return res;
    }
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (findIndex !== index) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    size() {
        return this.data.length;
    }
}