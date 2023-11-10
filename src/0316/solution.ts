export class Solution {
    /**
     * @param num: a array
     * @param target: a num
     * @return: return all combinations
     *          we will sort your return value in output
     */
    combinationSet (num: number[], target: number): number[] {
        const result:number[] = [];
        const backTracking = (current:number) => {
            if (current < target) {
                result.push(current);
            } else {
                return;
            }
            if (current === 0) {
                return;
            }
            current *= 10;
            for (const item of num) {
                backTracking(item + current);
            }
        };
        for (const item of num) {
            backTracking(item);
        }
        return result;
    }
}
