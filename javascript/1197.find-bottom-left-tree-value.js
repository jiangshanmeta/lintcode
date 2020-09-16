const findBottomLeftValue = function (root) {
    let result;
    let resultDepth = -1;
    function dfs (node, depth) {
        if (!node.left && !node.right) {
            if (depth > resultDepth) {
                resultDepth = depth;
                result = node.val;
            }
        }
        node.left && dfs(node.left, depth + 1);
        node.right && dfs(node.right, depth + 1);
    }
    root && dfs(root, 0);
    return result;
};
