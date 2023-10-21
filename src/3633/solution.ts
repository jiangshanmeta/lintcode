export class Solution {
    /**
     * @param arr: the arithmetic progression array
     * @return: the missing number
     */
    missingNumber (arr: number[]): number {
        const d = (arr[arr.length - 1] - arr[0]) / arr.length;
        if (d === 0) {
            return arr[0];
        }
        let low = 0;
        let high = arr.length - 1;
        let index = arr.length - 1;
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            const target = arr[0] + mid * d;
            if (d > 0) {
                if (arr[mid] > target) {
                    index = Math.min(index, mid);
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (arr[mid] < target) {
                    index = Math.min(index, mid);
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        return arr[0] + index * d;
    }
}
