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
   * @param root: A Tree
   * @return: Level order a list of lists of integer
   */
    levelOrder (root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }
        const result:number[][] = [];
        let ns = [root, ];
        while (ns.length) {
            const vals:number[] = [];
            const nns:TreeNode[] = [];
            for (const n of ns) {
                vals.push(n.val);
                if (n.left) {
                    nns.push(n.left);
                }
                if (n.right) {
                    nns.push(n.right);
                }
            }
            result.push(vals);
            ns = nns;
        }

        return result;
    }
}
