/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const h = new Heap((a, b) => a - b);
    for (const num of nums) {
        h.offer(num);
        if (h.size() > k) {
            h.poll();
        }
    }
    return h.peek();
};

class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = this.size() >> 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    size() {
        return this.data.length;
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && 
            this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex &&
            this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
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

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize);
    for (let i = nums.length - 1; i > nums.length - k; i--) {
        swap(nums, 0, i);
        heapSize--;
        maxHeapify(nums, 0, heapSize);
    }
    return nums[0];
    
    function buildMaxHeap(nums, heapSize) {
        for (let i = heapSize >> 1; i >= 0; i--) {
            maxHeapify(nums, i, heapSize);
        }
    }

    function maxHeapify(nums, i, heapSize) {
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let largest = i;
        if (l < heapSize && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < heapSize && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest !== i) {
            swap(nums, i, largest);
            maxHeapify(nums, largest, heapSize)
        }
    }

    function swap(a, i, j){
        [a[i], a[j]] = [a[j], a[i]];
    }
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const n = nums.length;
    const quick = (l, r) => {
        if (l > r) return;
        let random = Math.floor(Math.random() * (r - l + 1)) + l;
        swap(nums, random, r);
        
        let pivotIndex = partition(nums, l, r);
        if (n - k < pivotIndex) {
            quick(l, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r);
        }
    }
    quick(0, n - 1);
    return nums[n - k];
};

function partition(nums, left, right) {
    let pivot = nums[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(nums, right, pivotIndex);
    return pivotIndex;
}

function swap(nums, p, q) {
    [nums[p], nums[q]] = [nums[q], nums[p]];
}