export class Solution {
    /**
     * @param arr: the array
     * @return: the count of valid elements
     */
    countElements (arr: number[]): number {
        const map = new Map<number, number>();
        for (const num of arr) {
            if (map.has(num)) {
                map.set(num, map.get(num)! + 1);
            } else {
                map.set(num, 1);
            }
        }
        let result = 0;
        for (const num of arr) {
            if (map.has(num + 1)) {
                result += map.get(num + 1)!;
            }
        }
        return result;
    }
}
