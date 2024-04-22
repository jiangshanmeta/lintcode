export class Solution {
    /**
     * @param nums: An integer array
     * @return: Maximum subarray sum after squaring an element
     */
    maxSumAfterOperation (nums: number[]): number {
        let notyet = nums[0];
        let changed = nums[0] * nums[0];
        let result = Math.max(notyet, changed);
        for (let i = 1; i < nums.length; i++) {
            const nNotYet = Math.max(notyet, 0) + nums[i];
            const changed1 = Math.max(changed, 0) + nums[i];
            const changed2 = Math.max(notyet, 0) + nums[i] * nums[i];
            notyet = nNotYet;
            changed = Math.max(changed1, changed2);
            result = Math.max(result, notyet, changed);
        }
        return result;
    }
}
