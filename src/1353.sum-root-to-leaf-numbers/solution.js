/**
 * @param root: the root of the tree
 * @return: the total sum of all root-to-leaf numbers
 */
const sumNumbers = function (root) {
    let sum = 0;
    function dfs (node, prefix) {
        prefix = prefix * 10 + node.val;
        if (!node.left && !node.right) {
            sum += prefix;
            return;
        }
        node.left && dfs(node.left, prefix);
        node.right && dfs(node.right, prefix);
    }
    root && dfs(root, 0);
    return sum;
};
