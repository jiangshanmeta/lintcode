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
   * @param root: The root of binary tree.
   * @return: An integer
   */
    maxPathSum (root: TreeNode): number {
        if (!root) {
            return 0;
        }
        let result = -Infinity;
        const postOrder = (root:TreeNode | null) => {
            if (!root) {
                return 0;
            }
            const l = Math.max(postOrder(root.left), 0);
            const r = Math.max(postOrder(root.right), 0);
            result = Math.max(result, l + r + root.val);

            return Math.max(l, r) + root.val;
        };
        postOrder(root);

        return result;
    }
}
