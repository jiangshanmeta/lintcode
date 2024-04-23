const MOD = 10 ** 9 + 7;

export class Solution {
    /**
   * @param nums: An array containing only 0 and 1.
   * @return: The number of subarrays with more ones than zeros.
   */
    subarraysWithMoreOnesThanZeros (nums: number[]): number {
        const sums = [0, ];

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += (nums[i] > 0 ? 1 : -1);
            sums.push(sum);
        }
        let result = 0;
        const copy = new Array<number>(sums.length);
        const mergeSort = (l:number, r:number) => {
            if (r <= l) {
                return;
            }
            const mid = (l + r) >> 1;
            mergeSort(l, mid);
            mergeSort(mid + 1, r);
            let index1 = l;
            let index2 = mid + 1;
            while (index2 <= r) {
                while (index1 < mid + 1 && sums[index1] < sums[index2]) {
                    index1++;
                }
                index2++;
                result = (result + index1 - l) % MOD;
            }
            for (let i = l; i <= r; i++) {
                copy[i] = sums[i];
            }
            index1 = l;
            index2 = mid + 1;
            let index3 = l;
            while (index1 < mid + 1 && index2 < r + 1) {
                if (copy[index1] < copy[index2]) {
                    sums[index3++] = copy[index1++];
                } else {
                    sums[index3++] = copy[index2++];
                }
            }
            while (index1 < mid + 1) {
                sums[index3++] = copy[index1++];
            }
            while (index2 < r + 1) {
                sums[index3++] = copy[index2++];
            }
        };

        mergeSort(0, nums.length);

        return result;
    }
}
