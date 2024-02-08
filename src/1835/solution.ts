export class Solution {
    /**
     * @param steps: steps you can move
     * @param arrLen: the length of the array
     * @return: Number of Ways to Stay in the Same Place After Some Steps
     */
    numWays (steps: number, arrLen: number): number {
        let dp = new Array<number>(Math.min(arrLen, steps + 1)).fill(0);
        const MOD = 10 ** 9 + 7;
        dp[0] = 1;
        for (let i = 0; i < steps; i++) {
            const nDP = [...dp, ];

            for (let j = 0; j < dp.length; j++) {
                if (j + 1 < dp.length) {
                    nDP[j] = (dp[j + 1] + nDP[j]) % MOD;
                }
                if (j > 0) {
                    nDP[j] = (nDP[j] + dp[j - 1]) % MOD;
                }
            }

            dp = nDP;
        }
        return dp[0];
    }
}
