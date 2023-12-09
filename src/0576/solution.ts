export class Solution {
    /**
     * @param arr: an inter array
     * @return: return the min sum
     */
    splitArray (arr: number[]): number {
        let result = arr[1] + arr[3];
        let min = arr[1];
        for (let j = 4; j < arr.length - 1; j++) {
            min = Math.min(min, arr[j - 2]);
            result = Math.min(result, arr[j] + min);
        }

        return result;
    }
}
