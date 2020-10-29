/**
 * @param preorder: A list of integers that preorder traversal of a tree
 * @param inorder: A list of integers that inorder traversal of a tree
 * @return: Root of a tree
 */
const buildTree = function (preorder, inorder) {
    return buildTreeByIndexs(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
};

function buildTreeByIndexs (preorder, inorder, preorderStartIndex, preorderEndIndex, inorderStartIndex, inorderEndIndex) {
    if (preorderStartIndex > preorderEndIndex) {
        return null;
    }

    const rootVal = preorder[preorderStartIndex];

    let rootIndexInInOrder;
    for (let i = inorderStartIndex; i < inorderEndIndex + 1; i++) {
        if (inorder[i] === rootVal) {
            rootIndexInInOrder = i;
            break;
        }
    }
    const root = new TreeNode(rootVal);
    root.left = buildTreeByIndexs(
        preorder,
        inorder,
        preorderStartIndex + 1,
        rootIndexInInOrder - inorderStartIndex + preorderStartIndex,
        inorderStartIndex,
        rootIndexInInOrder - 1
    );

    root.right = buildTreeByIndexs(
        preorder,
        inorder,
        preorderEndIndex + rootIndexInInOrder - inorderEndIndex + 1,
        preorderEndIndex,
        rootIndexInInOrder + 1,
        inorderEndIndex
    );

    return root;
}
