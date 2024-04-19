export class Solution {
    /**
     * @param arr: the binary array
     * @return: the minimal number of  swaps
     */
    minSwaps (arr: number[]): number {
        let K = 0;
        const prefix = new Array<number>(arr.length + 1);
        prefix[0] = 0;
        for (let i = 0; i < arr.length; i++) {
            K += arr[i];
            prefix[i + 1] = prefix[i] + (arr[i] ^ 1);
        }
        let result = arr.length;
        for (let i = K - 1; i < arr.length; i++) {
            result = Math.min(result, prefix[i + 1] - prefix[i - K + 1]);
        }
        return result;
    }
}
