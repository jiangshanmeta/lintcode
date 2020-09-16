/**
 * @param root: A Tree
 * @return: Preorder in ArrayList which contains node values.
 */
const preorderTraversal = function (root) {
    const result = [];
    root && preOrder(root, result);
    return result;
};

function preOrder (root, result) {
    result.push(root.val);
    root.left && preOrder(root.left, result);
    root.right && preOrder(root.right, result);
}
