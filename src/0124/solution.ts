function radixSort (nums:number[]) {
    const min = Math.min(...nums);
    if (min < 0) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] -= min;
        }
    }

    const max = Math.max(...nums);
    const MAX_DIGIT = String(max).length;
    const help = new Array<number>(nums.length);
    let offset = 1;
    const counts = new Array<number>(10);
    for (let k = 0; k < MAX_DIGIT; k++) {
        counts.fill(0);
        for (let i = 0; i < nums.length; i++) {
            counts[Math.floor(nums[i] / offset) % 10]++;
        }
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
        }

        for (let i = nums.length - 1; i > -1; i--) {
            help[--counts[Math.floor(nums[i] / offset) % 10]] = nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = help[i];
        }

        offset *= 10;
    }
    return nums;
}

export class Solution {
    /**
     * @param num: A list of integers
     * @return: An integer
     */
    longestConsecutive (num: number[]): number {
        num = radixSort(num);

        let res = 0;
        let index = 0;
        while (index < num.length) {
            let count = 1;
            index++;
            while (index < num.length) {
                if (num[index] === num[index - 1]) {
                    index++;
                    continue;
                }
                if (num[index] === num[index - 1] + 1) {
                    count++;
                    index++;
                } else {
                    break;
                }
            }
            res = Math.max(res, count);
        }

        return res;
    }
}
