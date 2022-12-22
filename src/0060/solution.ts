export class Solution {
    /**
     * @param a: an integer sorted array
     * @param target: an integer to be inserted
     * @return: An integer
     */
    searchInsert (a: number[], target: number): number {
        let result = a.length;
        let left = 0;
        let right = a.length - 1;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (a[mid] > target) {
                right = mid - 1;
                result = Math.min(result, mid);
            } else if (a[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return result;
    }
}
