export class TreeNode {
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
   * @param root: Root node of a binary tree.
   * @param arr: An array of integers.
   * @return: If the array is a valid sequence.
   */
    isValidSequence (root: TreeNode, arr: number[]): boolean {
        const isMatch = (arr2:number[]) => {
            if (arr2.length !== arr.length) {
                return false;
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        };
        const dfs = (node:TreeNode, path:number[]):boolean => {
            path.push(node.val);
            if (!node.left && !node.right && isMatch(path)) {
                return true;
            }
            if (node.left && dfs(node.left, path)) {
                return true;
            }
            if (node.right && dfs(node.right, path)) {
                return true;
            }
            path.pop();
            return false;
        };

        return dfs(root, []);
    }
}
