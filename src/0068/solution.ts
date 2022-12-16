class TreeNode {
    val :number;
    left :TreeNode;
    right :TreeNode;
    constructor (val :number) {
        this.val = val;
        this.left = this.right = null;
    }
}

export class Solution {
    /**
   * @param root: A Tree
   * @return: Postorder in ArrayList which contains node values.
   */
    postorderTraversal (root: TreeNode | null): number[] {
        const result:number[] = [];
        if (root) {
            this.recursivePost(root, result);
        }
        return result;
    }

    recursivePost (root:TreeNode, result:number[]) {
        if (root.left) {
            this.recursivePost(root.left, result);
        }
        if (root.right) {
            this.recursivePost(root.right, result);
        }
        result.push(root.val);
    }
}
