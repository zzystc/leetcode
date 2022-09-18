var FreqStack = function() {
    this.maxFreq = 0;
    this.numFreq = new Map();
    this.freqStack = new Map();
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.numFreq.set(val, (this.numFreq.get(val) || 0) + 1);
    const freq = this.numFreq.get(val);
    this.maxFreq = Math.max(this.maxFreq, freq);
    if (this.freqStack.has(freq)) {
        this.freqStack.get(freq).push(val);
    } else {
        this.freqStack.set(freq, [val]);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const maxFreqStack = this.freqStack.get(this.maxFreq);
    const val = maxFreqStack.pop();
    this.numFreq.set(val, this.numFreq.get(val) - 1);
    if (maxFreqStack.length === 0) {
        this.maxFreq--;
    }
    return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */