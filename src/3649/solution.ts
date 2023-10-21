
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

function toSet (tree:TreeNode, set:Set<number>) {
    set.add(tree.val);
    tree.left && toSet(tree.left, set);
    tree.right && toSet(tree.right, set);
}

export class Solution {
    /**
   * @param root1: Root node of BST1.
   * @param root2: Root node of BST2.
   * @param target: Sum of two nodes.
   * @return: Whether the sum of two nodes in BSTs is target.
   */
    twoNodesSum (root1: TreeNode, root2: TreeNode, target: number): boolean {
        const set = new Set<number>();
        toSet(root2, set);
        const stack:TreeNode[] = [root1, ];
        while (stack.length) {
            const node = stack.pop()!;
            if (set.has(target - node.val)) {
                return true;
            }
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
        return false;
    }
}
