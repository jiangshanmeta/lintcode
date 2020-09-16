/**
 * @param root: the root
 * @return: the minimum absolute difference between values of any two nodes
 */
const getMinimumDifference = function (root) {
    const stack = [];
    let result = Infinity;
    let last = -Infinity;

    while (root) {
        stack.push(root);
        root = root.left;
    }

    while (stack.length) {
        root = stack.pop();
        result = Math.min(result, root.val - last);
        last = root.val;

        root = root.right;
        while (root) {
            stack.push(root);
            root = root.left;
        }
    }
    return result;
};
