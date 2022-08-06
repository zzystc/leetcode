/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    let profit = new Array(k);
    for (let j = 0; j <= k; j++) {
        profit[j] = {
            buy: -prices[0],
            sell: 0,
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            profit[j] = {
                sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
                buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
            }              
        }
    }
    return profit[k].sell;
};