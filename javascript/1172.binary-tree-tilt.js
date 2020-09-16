/**
 * @param root: the root
 * @return: the tilt of the whole tree
 */
const findTilt = function (root) {
    let result = 0;
    function postOrder (root) {
        if (!root) {
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        const current = Math.abs(left - right);
        result += current;
        return left + right + root.val;
    }
    postOrder(root);
    return result;
};
