/**
 * @param root: a TreeNode, the root of the binary tree
 * @return:
 */
const flatten = function (root) {
    if (!root) {
        return root;
    }
    root.right = flatten(root.right);
    if (root.left) {
        let left = flatten(root.left);
        const right = root.right;
        root.right = left;
        while (left.right) {
            left = left.right;
        }
        left.right = right;
        root.left = null;
    }

    return root;
};
