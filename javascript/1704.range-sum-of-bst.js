/**
 * @param root: the root node
 * @param L: an integer
 * @param R: an integer
 * @return: the sum
 */
const rangeSumBST = function (root, L, R) {
    let result = 0;
    function helper (node) {
        if (node.val > R) {
            node.left && helper(node.left);
        } else if (node.val < L) {
            node.right && helper(node.right);
        } else {
            result += node.val;
            node.left && helper(node.left);
            node.right && helper(node.right);
        }
    }
    root && helper(root);
    return result;
};
