export class Solution {
    /**
     * @param array: An array.
     * @return: An interger.
     */
    findNumber (array: number[]): number {
        let result = 0;
        let maxCount = 0;
        const map = new Map<number, number>();
        for (let i = 0; i < array.length; i++) {
            let count = 1;
            if (map.has(array[i])) {
                count += map.get(array[i]);
            }
            if (count > maxCount) {
                maxCount = count;
                result = array[i];
            } else if (count === maxCount && array[i] < result) {
                result = array[i];
            }
            map.set(array[i], count);
        }
        return result;
    }
}
