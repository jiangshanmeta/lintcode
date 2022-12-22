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
   * @return: True if this Binary tree is Balanced, or false.
   */
    isBalanced (root: TreeNode): boolean {
        return this.getBalanceAndHeight(root)[0];
    }

    getBalanceAndHeight (root:TreeNode | null):[boolean, number] {
        if (!root) {
            return [true, 0, ];
        }
        const [lB, lH, ] = this.getBalanceAndHeight(root.left);
        if (!lB) {
            return [false, 0, ];
        }
        const [rB, rH, ] = this.getBalanceAndHeight(root.right);
        if (!rB) {
            return [false, 0, ];
        }
        if (Math.abs(rH - lH) > 1) {
            return [false, 0, ];
        }

        return [true, Math.max(lH, rH) + 1, ];
    }
}
