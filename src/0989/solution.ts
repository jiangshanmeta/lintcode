export class Solution {
    /**
     * @param nums: an array
     * @return: the longest length of set S
     */
    arrayNesting (nums: number[]): number {
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === -1) {
                continue;
            }
            const set = new Set<number>();
            let n = i;
            while (!set.has(n)) {
                set.add(n);
                const nn = nums[n];
                nums[n] = -1;
                n = nn;
            }
            result = Math.max(result, set.size);
        }
        return result;
    }
}
