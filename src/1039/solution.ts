export class Solution {
    /**
     * @param arr: a permutation of N
     * @return: the most number of chunks
     */
    maxChunksToSorted (arr: number[]): number {
        let result = 0;
        let index = 0;
        while (index < arr.length) {
            result++;
            const min = index;
            let max = arr[index];
            while (index < arr.length) {
                max = Math.max(max, arr[index]);
                if (max - min === index - min) {
                    break;
                }
                index++;
            }
            index++;
        }
        return result;
    }
}
