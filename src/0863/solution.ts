export class Solution {
    /**
     * @param nums: a list of integers
     * @return: return an integer
     */
    pathSum (nums: number[]): number {
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
            const level = num % 10;
            num -= level;
            num /= 10;
            tree[num - 1][level - 1] = val;
        }
        let result = 0;
        const dfs = (sum:number, level:number, offset:number) => {
            sum += tree[level][offset];

            const lIndex = 2 * offset;
            const rIndex = lIndex + 1;
            if (level === tree.length - 1 || (tree[level + 1][lIndex] === -1 && tree[level + 1][rIndex] === -1)) {
                result += sum;
                return;
            }
            if (tree[level + 1][lIndex] !== -1) {
                dfs(sum, level + 1, lIndex);
            }
            if (tree[level + 1][rIndex] !== -1) {
                dfs(sum, level + 1, rIndex);
            }
        };
        dfs(0, 0, 0);

        return result;
    }
}
