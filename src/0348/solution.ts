export class Solution {
    /**
     * @param obstacles: the tracks which obstacles are settled on.
     * @return: return the minimum times to switch the track.
     */
    trackSwitching (obstacles: number[]): number {
        let dp = [obstacles.length, 0, obstacles.length, ];
        for (let obstacle of obstacles) {
            obstacle--;
            const nDp = [...dp, ];
            nDp[obstacle] = obstacles.length;
            for (let i = 0; i < dp.length; i++) {
                if (i === obstacle) {
                    continue;
                }
                nDp[i] = Math.min(nDp[i], dp[obstacle] + 1);
            }
            dp = nDp;
        }
        return Math.min(...dp);
    }
}
