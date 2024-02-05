export class Solution {
    /**
     * @param steps: steps you can move
     * @param arrLen: the length of the array
     * @return: Number of Ways to Stay in the Same Place After Some Steps
     */
    numWays (steps: number, arrLen: number): number {
        const MOD = 10 ** 9 + 7;
        const L = Math.min(arrLen, steps + 1);
        let dp = new Array<number>(L).fill(0);
        dp[0] = 1;
        for (let i = 0; i < steps; i++) {
            const nDp = [...dp, ];
            for (let i = 0; i < dp.length; i++) {
                if (i - 1 > -1) {
                    nDp[i - 1] = (nDp[i - 1] + dp[i]) % MOD;
                }
                if (i + 1 < nDp.length) {
                    nDp[i + 1] = (nDp[i + 1] + dp[i]) % MOD;
                }
            }
            dp = nDp;
        }

        return dp[0];
    }
}
