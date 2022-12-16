export class Solution {
    /**
     * @param inputs: an integer array
     * @param tests: an integer array
     * @return: return true if sum of two values in inputs are in tests.
     */
    addAndSearch (inputs: number[], tests: number[]): boolean {
        const set = new Set(tests);
        for (let i = 0; i < inputs.length; i++) {
            for (let j = i + 1; j < inputs.length; j++) {
                if (set.has(inputs[i] + inputs[j])) {
                    return true;
                }
            }
        }
        return false;
    }
}
