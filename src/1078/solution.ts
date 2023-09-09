export class Solution {
    /**
     * @param nums: a list of integers
     * @return: return a integer
     */
    findShortestSubArray (nums: number[]): number {
        let maxFreq = 0;
        const map :Record<number, number[]> = {};
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                map[nums[i]].push(i);
            } else {
                map[nums[i]] = [i, ];
            }
            maxFreq = Math.max(maxFreq, map[nums[i]].length);
        }

        let result = nums.length;
        Object.values(map).forEach((indexs) => {
            if (indexs.length < maxFreq) {
                return;
            }
            result = Math.min(result, indexs[indexs.length - 1] - indexs[0] + 1);
        });

        return result;
    }
}
