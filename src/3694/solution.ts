export class Solution {
    /**
     * @param nums: An integer array
     * @return: Length of non-negative subarray
     */
    nonnegativeSubarray (nums: number[]): number {
        let sum = 0;
        const stack = [0, ];
        const indexs = [-1, ];
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            let low = 0;
            let high = stack.length - 1;
            while (low <= high) {
                const mid = (low + high) >> 1;
                if (stack[mid] > sum) {
                    low = mid + 1;
                } else {
                    res = Math.max(res, i - indexs[mid]);
                    high = mid - 1;
                }
            }

            if (sum < stack[stack.length - 1]) {
                stack.push(sum);
                indexs.push(i);
            }
        }
        return res;
    }
}
