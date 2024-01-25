export class Solution {
    /**
     * @param nums: A list of integer which is 0, 1 or 2
     * @return: nothing
     */
    sortColors (nums: number[]) {
        let index1 = 0;
        let index2 = 0;
        let index3 = nums.length - 1;
        const swap = (i:number, j:number) => {
            const tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        };

        while (index2 <= index3) {
            if (nums[index2] === 2) {
                swap(index2, index3);
                index3--;
            } else if (nums[index2] === 0) {
                swap(index2, index1);
                index2++;
                index1++;
            } else {
                index2++;
            }
        }
    }
}
