class TreeNode {
    val :number;
    left :TreeNode | null;
    right :TreeNode | null;
    constructor (val :number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class Solution {
    /**
   * @param root: the root
   * @return: all the values with the highest frequency in any order
   *          we will sort your return value in output
   */
    findFrequentTreeSum (root: TreeNode): number[] {
        let maxFreq = 0;
        let result:number[] = [];
        const map = new Map<number, number>();

        const dfs = (node:TreeNode | null):number => {
            if (!node) {
                return 0;
            }

            const sum = dfs(node.left) + dfs(node.right) + node.val;

            const count = map.has(sum) ? map.get(sum)! + 1 : 1;
            map.set(sum, count);

            if (count > maxFreq) {
                result = [sum, ];
                maxFreq = count;
            } else if (count === maxFreq) {
                result.push(sum);
            }

            return sum;
        };
        dfs(root);

        return result;
    }
}
