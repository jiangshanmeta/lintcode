export class Solution {
    /**
     * @param weights: apple weights
     * @return: the max number of apples
     */
    maxNumberOfApples (weights: number[]): number {
        weights.sort((a, b) => a - b);
        let sum = 0;
        for (let i = 0; i < weights.length; i++) {
            sum += weights[i];
            if (sum > 5000) {
                return i;
            }
        }
        return weights.length;
    }
}
