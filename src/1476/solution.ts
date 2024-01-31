export class Solution {
    /**
     * @param a: an array
     * @return: any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
     */
    peakIndexInMountainArray (a: number[]): number {
        let l = 1;
        let r = a.length - 2;
        let res = -1;
        while (l <= r) {
            const mid = (l + r) >> 1;
            if (a[mid] < a[mid - 1]) {
                r = mid - 1;
            } else if (a[mid] < a[mid + 1]) {
                l = mid + 1;
            } else {
                res = mid;
                break;
            }
        }
        return res;
    }
}
