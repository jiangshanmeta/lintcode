/**
 * @param root: root of the given tree
 * @return: whether it is a mirror of itself
 */
const isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    return isSymmetricNode(root.left, root.right);
};

function isSymmetricNode (root1, root2) {
    if (root1 && root2) {
        return root1.val === root2.val && isSymmetricNode(root1.left, root2.right) && isSymmetricNode(root1.right, root2.left);
    } else if (!root1 && !root2) {
        return true;
    }

    return false;
}
