/**
 * @param root: the tree
 * @param val: the val which should be find
 * @return: the node
 */
const searchBST = function (root, val) {
    while (root) {
        if (root.val > val) {
            root = root.left;
        } else if (root.val < val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
};
