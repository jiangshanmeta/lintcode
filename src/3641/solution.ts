export class Solution {
    /**
     * @param plan: An integer array
     * @param k: Total number of consecutive days
     * @param lower: The score of an invalid plan
     * @param upper: The score of an effective plan
     * @return: Total score of plan
     */
    sportPlanPerformance (plan: number[], k: number, lower: number, upper: number): number {
        let result = 0;
        let sum = 0;
        for (let i = 0; i < k - 1; i++) {
            sum += plan[i];
        }
        for (let i = k - 1; i < plan.length; i++) {
            sum += plan[i];
            if (sum > upper) {
                result++;
            } else if (sum < lower) {
                result--;
            }
            sum -= plan[i - k + 1];
        }

        return result;
    }
}
