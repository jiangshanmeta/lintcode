export class Solution {
    /**
     * @param a: the array.
     * @param k: the integer.
     * @return: the divisor satisfy the requirement.
     */
    findDivisor (a: number[], k: number): number {
        let left = 1;
        let right = Math.max(...a);
        let result = 1;
        while (left <= right) {
            const mid = (left + right) >> 1;
            let sum = 0;
            for (const n of a) {
                sum += Math.ceil(n / mid);
            }
            if (sum >= k) {
                result = Math.max(result, mid);
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
