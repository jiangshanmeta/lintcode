/**
 * @param root: t
 * @return: the sum of all left leaves
 */
const sumOfLeftLeaves = function (root) {
    let result = 0;
    function helper (root, isLeft) {
        if (!root.left && !root.right) {
            if (isLeft) {
                result += root.val;
            }
        }
        root.left && helper(root.left, true);
        root.right && helper(root.right, false);
    }
    root && helper(root, false);
    return result;
};
