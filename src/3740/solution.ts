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
   * @param root: The root node of a binary tree.
   * @return: The number of nodes equal to sum of child nodes.
   */
    equalToChildNodes (root: TreeNode): number {
        let result = 0;
        const dfs = (node:TreeNode | null):number => {
            if (!node) {
                return 0;
            }
            const l = dfs(node.left);
            const r = dfs(node.right);
            if (l + r === node.val) {
                result++;
            }
            return l + r + node.val;
        };
        dfs(root);

        return result;
    }
}
