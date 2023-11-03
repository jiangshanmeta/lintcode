export class Solution {
    /**
     * @param nums: An integer array
     * @param k: Size of subarray
     * @return: Count of different numbers in the subarray
     */
    distinctNumbers (nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (let i = 0; i < k - 1; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i])! + 1);
            } else {
                map.set(nums[i], 1);
            }
        }
        let size = map.size;
        const result:number[] = [];
        for (let i = k - 1; i < nums.length; i++) {
            const prev = map.has(nums[i]) ? map.get(nums[i])! : 0;
            if (prev === 0) {
                size++;
            }
            result.push(size);
            map.set(nums[i], prev + 1);

            const start = map.get(nums[i - k + 1])! - 1;
            if (start === 0) {
                size--;
            }
            map.set(nums[i - k + 1], start);
        }

        return result;
    }
}
