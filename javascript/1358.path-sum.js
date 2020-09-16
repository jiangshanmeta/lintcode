/**
 * @param root: the tree
 * @param sum: the sum
 * @return:  if the tree has a root-to-leaf path
 */
const pathSum = function (root, sum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val === sum;
    }
    return pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val);
};
