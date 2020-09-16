/**
 * @param root: a root of integer
 * @return: return a integer list
 */
const findMode = function (root) {
    // 非递归实现中序遍历
    const result = [];
    const stack = [];
    let modeCount = 0;
    let curCount = 0;
    let curVal;
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (stack.length) {
        root = stack.pop();
        if (root.val !== curVal) {
            curVal = root.val;
            curCount = 1;
        } else {
            curCount++;
        }

        if (curCount > modeCount) {
            modeCount = curCount;
            result.length = 0;
            result.push(curVal);
        } else if (curCount === modeCount) {
            result.push(curVal);
        }

        root = root.right;
        while (root) {
            stack.push(root);
            root = root.left;
        }
    }
    return result;
};
