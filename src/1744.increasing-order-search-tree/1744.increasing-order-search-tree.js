/**
 * @param root: a binary search tree
 * @return: Root of a tree
 */
const increasingBST = function (root) {
    if (!root) {
        return root;
    }
    root.right = increasingBST(root.right);

    if (root.left) {
        const leftRoot = increasingBST(root.left);
        let last = leftRoot;
        while (last.right) {
            last = last.right;
        }
        last.right = root;
        root.left = null;
        return leftRoot;
    }
    return root;
};
