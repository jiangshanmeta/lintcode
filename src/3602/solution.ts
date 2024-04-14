export class Solution {
    /**
     * @param nums: a list
     * @return: The largest sum that is divisible by 3
     */
    maxSumDivThree (nums: number[]): number {
        let dp = [0, 0, 0, ];
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            const nDp = [...dp, ];
            nDp[nums[i] % 3] = Math.max(nDp[nums[i] % 3], nums[i]);
            for (let j = 0; j < 3; j++) {
                if (dp[j] === 0) {
                    continue;
                }
                const index = (j + nums[i]) % 3;
                nDp[index] = Math.max(dp[j] + nums[i], nDp[index]);
            }

            res = Math.max(nDp[0], res);
            dp = nDp;
        }
        return res;
    }
}
