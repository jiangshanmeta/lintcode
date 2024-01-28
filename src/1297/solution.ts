export class Solution {
    /**
     * @param nums: a list of integers
     * @return: return a list of integers
     */
    countSmaller (nums: number[]): number[] {
        const numsWithIndex = nums.map((item, index) => {
            return {
                item,
                index,
            };
        });

        const copy = new Array<{item:number, index:number}>(nums.length);

        const result = new Array<number>(nums.length).fill(0);
        const mergeSort = (l:number, r:number) => {
            if (r - l < 1) {
                return;
            }
            const m = (l + r) >> 1;
            mergeSort(l, m);
            mergeSort(m + 1, r);

            let index = m + 1;
            for (let i = l; i <= m; i++) {
                while (index <= r && numsWithIndex[index].item < numsWithIndex[i].item) {
                    index++;
                }
                result[numsWithIndex[i].index] += index - m - 1;
            }

            for (let i = l; i <= r; i++) {
                copy[i] = numsWithIndex[i];
            }
            let index1 = l;
            let index2 = m + 1;
            let index3 = l;
            while (index1 <= m && index2 <= r) {
                if (copy[index1].item < copy[index2].item) {
                    numsWithIndex[index3++] = copy[index1++];
                } else {
                    numsWithIndex[index3++] = copy[index2++];
                }
            }

            while (index1 <= m) {
                numsWithIndex[index3++] = copy[index1++];
            }
            while (index2 <= r) {
                numsWithIndex[index3++] = copy[index2++];
            }
        };

        mergeSort(0, nums.length - 1);

        return result;
    }
}
