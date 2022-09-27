/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, edges) {
    let dist = new Array(n).fill(0).map(() => new Array(n).fill(Infinity)); //存储两点之间的距离
        for(let i = 0; i < n; i ++){
            dist[i][i] = 0;
        }       
        let dp = new Array(1 << n).fill(0);                          //状态压缩存储 dp[j]表示子树j的最大距离
        for(let edge of edges){
            dist[edge[0]-1][edge[1]-1] = 1;
            dist[edge[1]-1][edge[0]-1] = 1;
            dp[(1 << (edge[0] - 1)) | (1 << (edge[1] - 1))] = 1;
        }
        for(let k = 0; k < n; k ++){
            for(let i = 0; i < n; i ++){
                for(let j = 0; j < n; j ++){
                    if(dist[i][k] != 16 && dist[k][j] != 16){
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }
        for(let j = 1; j < dp.length; j ++){
            if(dp[j] == 0) continue;
            for(let i = 0; i < n; i ++){
                if(((1 << i) & j) != 0 || dp[j | (1 << i)] != 0) continue;
                for(let k = 0; k < n; k ++){
                    if(((1 << k) & j) != 0 && dist[i][k] == 1){
                        dp[j | (1 << i)] = dp[j];
                        break;
                    }
                }
                if(dp[j | (1 << i)] == 0) continue;
                for(let kk = 0;kk < n;kk ++){
                    if(((1 << kk) & j) != 0){
                        dp[j | (1 << i)] = Math.max(dp[j | (1 << i)], dist[i][kk]);
                    }
                }
            }
        }
        let ans = new Array(n - 1).fill(0);
        for(let j = 0;j < dp.length;j ++){
            if(dp[j] != 0) ans[dp[j] - 1] ++;
        }
        return ans;
};

let n = 4, edges = [[1,2],[2,3],[2,4]];
countSubgraphsForEachDiameter(n, edges);