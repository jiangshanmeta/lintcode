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
    maxDepth (root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    }
}
