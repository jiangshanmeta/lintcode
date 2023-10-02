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

function dfs (root:TreeNode):[boolean, number, number] {
    if (root.left && root.right) {
        const [lb, lv, lc, ] = dfs(root.left);
        const [rb, rv, rc, ] = dfs(root.right);
        if (lb && rb && root.val === lv && root.val === rv) {
            return [true, root.val, lc + rc + 1, ];
        }
        return [false, 0, lc + rc, ];
    } else if (root.left) {
        const [lb, lv, lc, ] = dfs(root.left);
        if (lb && root.val === lv) {
            return [true, root.val, lc + 1, ];
        }
        return [false, 0, lc, ];
    } else if (root.right) {
        const [rb, rv, rc, ] = dfs(root.right);
        if (rb && root.val === rv) {
            return [true, root.val, rc + 1, ];
        }
        return [false, 0, rc, ];
    } else {
        return [true, root.val, 1, ];
    }
}

export class Solution {
    /**
   * @param root: the given tree
   * @return: the number of uni-value subtrees.
   */
    countUnivalSubtrees (root: TreeNode): number {
        if (!root) {
            return 0;
        }
        return dfs(root)[2];
    }
}
