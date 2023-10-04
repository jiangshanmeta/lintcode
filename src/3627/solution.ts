
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
   * @param root: Root node of a tree.
   * @return: List of lonely nodes.
   *          we will sort your return value in output
   */
    getLonelyNodes (root: TreeNode): number[] {
        const result:number[] = [];
        const dfs = (root:TreeNode) => {
            if (root.left && root.right) {
                dfs(root.left);
                dfs(root.right);
            } else if (root.right) {
                result.push(root.right.val);
                dfs(root.right);
            } else if (root.left) {
                result.push(root.left.val);
                dfs(root.left);
            }
        };
        root && dfs(root);
        return result;
    }
}
