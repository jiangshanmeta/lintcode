/**
 * @param root: the root of the binary tree
 * @return: all root-to-leaf paths
 */
const binaryTreePaths = function (root) {
    const result = [];
    function dfs (node, result, path) {
        path.push(node.val);
        if (!node.left && !node.right) {
            result.push(path.join('->'));
        } else {
            node.left && dfs(node.left, result, path);
            node.right && dfs(node.right, result, path);
        }
        path.pop();
    }
    root && dfs(root, result, []);
    return result;
};
