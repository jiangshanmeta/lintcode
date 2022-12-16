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
   * @return: Inorder in ArrayList which contains node values.
   */
    inorderTraversal (root: TreeNode | null): number[] {
        const result:number[] = [];
        if (root) {
            this.recursiveInOrder(root, result);
        }

        return result;
    }

    recursiveInOrder (root:TreeNode, result:number[]) {
        if (root.left) {
            this.recursiveInOrder(root.left, result);
        }
        result.push(root.val);
        if (root.right) {
            this.recursiveInOrder(root.right, result);
        }
    }
}
