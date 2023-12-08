export class Solution {
    /**
     * @param l: Given n pieces of wood with length L[i]
     * @param k: An integer
     * @return: The maximum length of the small pieces
     */
    woodCut (l: number[], k: number): number {
        if (l.length === 0) {
            return 0;
        }
        let max = l[0];
        let sum = l[0];
        for (let i = 1; i < l.length; i++) {
            max = Math.max(max, l[i]);
            sum += l[i];
        }
        if (sum < k) {
            return 0;
        }
        let low = 1;
        let high = max;
        let result = 1;
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            let current = 0;
            for (const item of l) {
                current += Math.floor(item / mid);
            }
            if (current < k) {
                high = mid - 1;
            } else {
                result = Math.max(result, mid);
                low = mid + 1;
            }
        }

        return result;
    }
}
