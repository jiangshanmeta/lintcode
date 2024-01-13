export class Solution {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param a: Given n items with size A[i]
     * @return: The maximum size
     */
    backPack (m: number, a: number[]): number {
        const SUM = a.reduce((acc, item) => acc + item, 0);
        if (SUM < m) {
            return SUM;
        }
        const dp = new Array<boolean>(m + 1);
        dp[0] = true;
        for (const item of a) {
            for (let i = dp.length - 1; i >= item; i--) {
                if (dp[i - item]) {
                    dp[i] = true;
                }
            }
        }
        for (let i = dp.length - 1; i > -1; i--) {
            if (dp[i]) {
                return i;
            }
        }

        return 0;
    }
}
