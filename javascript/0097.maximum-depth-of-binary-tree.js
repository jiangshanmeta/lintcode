/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
const maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
