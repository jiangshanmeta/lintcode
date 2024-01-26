export class Solution {
    /**
     * @param nums: the list
     * @return: the sum of all paths from the root towards the leaves
     */
    pathSumIV (nums: number[]): number {
        const tree = [
            new Array<number>(8).fill(-1),
            new Array<number>(8).fill(-1),
            new Array<number>(8).fill(-1),
            new Array<number>(8).fill(-1),
        ];
        for (let num of nums) {
            const val = num % 10;
            num -= val;
            num /= 10;
            const p = num % 10;
            num = (num - p) / 10;
            tree[num - 1][p - 1] = val;
        }

        let res = 0;
        const dfs = (d:number, offset:number, sum:number) => {
            sum += tree[d][offset];
            if (d === 3 || (tree[d + 1][2 * offset] === -1 && tree[d + 1][2 * offset + 1] === -1)) {
                res += sum;
                return;
            }
            if (tree[d + 1][2 * offset] !== -1) {
                dfs(d + 1, 2 * offset, sum);
            }
            if (tree[d + 1][2 * offset + 1] !== -1) {
                dfs(d + 1, 2 * offset + 1, sum);
            }
        };
        dfs(0, 0, 0);

        return res;
    }
}
