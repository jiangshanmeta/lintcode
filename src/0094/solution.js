/**
 * @param root: The root of binary tree.
 * @return: An integer
 */
const maxPathSum = function (root) {
    return helper(root)[0];
};

function helper (root) {
    if (!root) {
        return [-Infinity, -Infinity, ];
    }
    const [leftRst, leftMax, ] = helper(root.left);
    const [rightRst, rightMax, ] = helper(root.right);
    const curMax = Math.max(0, leftMax, rightMax) + root.val;
    return [
        Math.max(
            leftRst,
            rightRst,
            root.val + (rightMax > 0 ? rightMax : 0) + (leftMax > 0 ? leftMax : 0)
        ),
        curMax,
    ];
}
