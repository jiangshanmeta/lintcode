export class Solution {
    /**
     * @param arr: the original array
     * @return: the final array
     */
    transformArray (arr: number[]): number[] {
        let hasChange = true;
        while (hasChange) {
            hasChange = false;
            const na = [...arr, ];
            for (let i = 1; i < arr.length - 1; i++) {
                if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                    hasChange = true;
                    na[i] = arr[i] + 1;
                }
                if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                    hasChange = true;
                    na[i] = arr[i] - 1;
                }
            }
            if (hasChange) {
                arr = na;
            }
        }
        return arr;
    }
}
