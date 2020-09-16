/**
 * @param root: the root
 * @return: the maximum width of the given tree
 */
const widthOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }
    let result = 1;
    let level = [root, ];
    let indexs = [1, ];
    while (level.length) {
        const nextLevel = [];
        const nextIndexs = [];
        if (indexs.length > 1) {
            result = Math.max(result, indexs[indexs.length - 1] - indexs[0] + 1);
        }
        for (let i = 0; i < level.length; i++) {
            const node = level[i];
            node.left && nextLevel.push(node.left) && nextIndexs.push(2 * indexs[i]);
            node.right && nextLevel.push(node.right) && nextIndexs.push(2 * indexs[i] + 1);
        }

        level = nextLevel;
        indexs = nextIndexs;
    }
    return result;
};
