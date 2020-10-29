/**
 * @param t: the root of tree
 * @return: return a string
 */
const tree2str = function (t) {
    const result = [];
    preOrder(t, result);
    return result.join('');
};

function preOrder (root, result) {
    if (!root) {
        return;
    }
    result.push(root.val);
    if (!root.left && !root.right) {
        return;
    }
    result.push('(');
    preOrder(root.left, result);
    result.push(')');

    if (root.right) {
        result.push('(');
        preOrder(root.right, result);
        result.push(')');
    }
}
