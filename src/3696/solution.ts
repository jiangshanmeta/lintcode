export class Solution {
    /**
     * @param nums: An integer array
     * @return: Whether the sum of the parity subscript elements is equal
     */
    inverseSubarray (nums: number[]): boolean {
        const sums = [0, 0, ];
        for (let i = 0; i < nums.length; i++) {
            sums[i % 2] += nums[i];
        }
        if ((sums[1] - sums[0]) % 2 !== 0) {
            return false;
        }
        const D = (sums[1] - sums[0]) / 2;
        sums.fill(0);
        const set = new Set([0, ]);
        for (let i = 0; i < nums.length; i++) {
            sums[i % 2] += nums[i];
            const d = sums[1] - sums[0];
            if (set.has(d - D)) {
                return true;
            }
            set.add(d);
        }
        return false;
    }
}
