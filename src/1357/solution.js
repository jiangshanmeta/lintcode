/**
 * @param root: a binary tree
 * @param sum: the sum
 * @return: the scheme
 */
const pathSum = function (root, sum) {
    const result = [];
    dfs(root, sum, [], result);
    return result;
};

function dfs (root, sum, sequence, result) {
    if (!root) {
        return;
    }

    if (!root.left && !root.right) {
        if (root.val === sum) {
            sequence.push(root.val);
            result.push(sequence.slice(0));
            sequence.pop();
        }
        return;
    }

    sequence.push(root.val);
    dfs(root.left, sum - root.val, sequence, result);
    dfs(root.right, sum - root.val, sequence, result);
    sequence.pop();
}
