function hasIntersection (a:number[], b:number[]) {
    return (a[0] >= b[0] && a[0] <= b[1]) || (a[1] >= b[0] && a[1] <= b[1]);
}

export class Solution {
    /**
     * @param a: first sequence
     * @param b: second sequence
     * @return: return ans
     */
    intersection (a: number[][], b: number[][]): number[][] {
        const result:number[][] = [];
        if (a.length === 0 || b.length === 0) {
            return result;
        }

        let left = 0;
        let right = 0;
        for (let i = 0; i < a.length; i++) {
            const inteval = a[i];

            if (b[left][0] > inteval[1]) {
                continue;
            }

            while (left < b.length && b[left][1] < inteval[0]) {
                left++;
            }

            if (left === b.length) {
                break;
            }
            if (b[left][0] > inteval[1]) {
                continue;
            }
            right = Math.max(right, left);
            while (right < b.length && b[right][0] <= inteval[1]) {
                right++;
            }
            for (let j = left; j < right; j++) {
                result.push([i, j, ]);
            }
        }

        return result;
    }
}
