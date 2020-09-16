/**
 * @param root: a root of binary tree
 * @return: return a integer
 */
const diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }
    return postOrder(root)[0] - 1;
};

function postOrder (root) {
    if (!root) {
        return [0, 0, ];
    }

    const [rstLeft, maxLeft, ] = postOrder(root.left);
    const [rstRight, maxRight, ] = postOrder(root.right);

    return [
        Math.max(rstLeft, rstRight, maxLeft + maxRight + 1),
        Math.max(maxLeft, maxRight) + 1,
    ];
}
