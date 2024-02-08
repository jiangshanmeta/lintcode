export class Solution {
    /**
     * @param a: a list of integer
     * @param k: a integer
     * @param l: a integer
     * @return: return the maximum number of apples that they can collect.
     */
    pickApples (a: number[], k: number, l: number): number {
        if (k + l > a.length) {
            return -1;
        }

        const check = (k:number, l:number) => {
            const rightMax = new Array<number>(a.length + 1).fill(0);
            let sum = 0;
            for (let i = a.length - 1; i > a.length - l; i--) {
                sum += a[i];
            }
            for (let i = a.length - l; i >= k; i--) {
                sum += a[i];
                rightMax[i] = Math.max(rightMax[i + 1], sum);
                sum -= a[i + l - 1];
            }

            let res = 0;
            sum = 0;
            for (let i = 0; i < k - 1; i++) {
                sum += a[i];
            }

            for (let i = k - 1; i < a.length - l; i++) {
                sum += a[i];
                res = Math.max(res, sum + rightMax[i + 1]);
                sum -= a[i - k + 1];
            }
            return res;
        };

        return Math.max(check(k, l), check(l, k));
    }
}
