export class Solution {
    /**
     * @param nums: An integer array
     * @return: The leftmost side of the element is smaller than its value
     */
    leftmostSmaller (nums: number[]): number[] {
        if (nums.length === 0) {
            return [];
        }
        const result = new Array<number>(nums.length).fill(-1);
        const stack = [nums[0], ];
        for (let i = 1; i < nums.length; i++) {
            const n = nums[i];
            let left = 0;
            let right = stack.length - 1;
            let index = stack.length;
            while (left <= right) {
                const mid = left + ((right - left) >> 0);
                if (stack[mid] < n) {
                    index = Math.min(index, mid);
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (index !== stack.length) {
                result[i] = stack[index];
            }

            if (n < stack[stack.length - 1]) {
                stack.push(n);
            }
        }
        return result;
    }
}
