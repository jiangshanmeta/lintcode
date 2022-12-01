export class Solution {
    /**
     * @param nums: the array to be scored.
     * @param k: the requirement of subarray length.
     * @param u: if the sum is less than u, get 1 score.
     * @param l: if the sum is greater than l, lose 1 score.
     * @return: return the sum of scores for every subarray whose length is k.
     */
    arrayScore (nums: number[], k: number, u: number, l: number): number {
        let result = 0;
        let sum = 0;
        for (let i = 0; i < k - 1; i++) {
            sum += nums[i];
        }
        for (let i = k - 1; i < nums.length; i++) {
            sum += nums[i];
            if (sum < u) {
                result++;
            } else if (sum > l) {
                result--;
            }
            sum -= nums[i - k + 1];
        }

        return result;
    }
}
