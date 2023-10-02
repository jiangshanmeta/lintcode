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

function getHeight (root:TreeNode):number {
    if (!root) {
        return 0;
    }
    if (root.left && root.right) {
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    } else if (root.left) {
        return getHeight(root.left) + 1;
    } else if (root.right) {
        return getHeight(root.right) + 1;
    } else {
        return 1;
    }
}

export class Solution {
    /**
   * @param root: a binary tree.
   * @return: return the minimun subtree contains all the key nodes.
   */
    subtreeWithAllKeyNodes (root: TreeNode): TreeNode {
        if (!root) {
            return root;
        }
        const H = getHeight(root);
        const dfs = (root:TreeNode, depth:number):[boolean, TreeNode | null] => {
            if (depth === H) {
                return [true, root, ];
            }
            if (root.left && root.right) {
                const [lb, ln, ] = dfs(root.left, depth + 1);
                const [rb, rn, ] = dfs(root.right, depth + 1);
                if (lb && rb) {
                    return [true, root, ];
                } else if (lb) {
                    return [lb, ln, ];
                } else if (rb) {
                    return [rb, rn, ];
                } else {
                    return [false, null, ];
                }
            } else if (root.left) {
                return dfs(root.left, depth + 1);
            } else if (root.right) {
                return dfs(root.right, depth + 1);
            } else {
                return [false, null, ];
            }
        };
        return dfs(root, 1)[1]!;
    }
}
