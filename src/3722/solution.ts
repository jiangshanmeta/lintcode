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
   * @param root: The root node of a binary tree.
   * @param p: The value of a node in the binary tree.
   * @param q: The value of a node in the binary tree.
   * @return: The distance between two nodes in a binary tree.
   */
    calculateDistance (root: TreeNode, p: number, q: number): number {
        if (p === q) {
            return 0;
        }
        const findNode = (node:TreeNode, path:TreeNode[], target:number) => {
            path.push(node);
            if (node.val === target) {
                return true;
            }
            if (node.left && findNode(node.left, path, target)) {
                return true;
            }
            if (node.right && findNode(node.right, path, target)) {
                return true;
            }
            path.pop();
            return false;
        };
        const path1:TreeNode[] = [];
        const path2:TreeNode[] = [];
        findNode(root, path1, p);
        findNode(root, path2, q);

        let result = Math.abs(path1.length - path2.length);
        if (path1.length > path2.length) {
            path1.length = path1.length - result;
        } else {
            path2.length = path2.length - result;
        }

        while (path1[path1.length - 1] !== path2[path2.length - 1]) {
            path1.pop();
            path2.pop();
            result += 2;
        }

        return result;
    }
}
