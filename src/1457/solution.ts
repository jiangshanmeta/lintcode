export class Solution {
    /**
     * @param arr: The array
     * @param k: the sum
     * @return: The length of the array
     */
    searchSubarray (arr: number[], k: number): number {
        const map = new Map<number, number>();
        map.set(0, -1);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (map.has(sum - k)) {
                return i - map.get(sum - k)!;
            }
            if (!map.has(sum)) {
                map.set(sum, i);
            }
        }
        return -1;
    }
}
