export class Solution {
    /**
     * @param nums: an array
     * @return: whether you could make one square using all the matchsticks the little match girl has
     */
    makesquare (nums: number[]): boolean {
        if (nums.length < 4) {
            return false;
        }
        const SUM = nums.reduce((acc, item) => acc + item, 0);
        if (SUM % 4 !== 0) {
            return false;
        }
        const L = SUM / 4;
        for (const l of nums) {
            if (l > L) {
                return false;
            }
        }
        const backTracking = (index:number, lens:number[]):boolean => {
            if (index === nums.length) {
                return true;
            }
            for (let i = 0; i < lens.length; i++) {
                if (lens[i] + nums[index] > L) {
                    continue;
                }
                if (i > 0 && lens[i] === lens[i - 1]) {
                    continue;
                }
                lens[i] += nums[index];
                if (backTracking(index + 1, lens)) {
                    return true;
                }
                lens[i] -= nums[index];
            }
            return false;
        };
        return backTracking(0, [0, 0, 0, 0, ]);
    }
}
