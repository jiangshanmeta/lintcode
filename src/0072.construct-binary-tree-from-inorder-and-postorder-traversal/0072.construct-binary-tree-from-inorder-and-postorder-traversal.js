/**
 * @param inorder: A list of integers that inorder traversal of a tree
 * @param postorder: A list of integers that postorder traversal of a tree
 * @return: Root of a tree
 */
const buildTree = function (inorder, postorder) {
    return buildTreeByIndexs(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};

function buildTreeByIndexs (inorder, postorder, inorderStartIndex, inorderEndIndex, postorderStartIndex, postOrderEndIndex) {
    if (inorderStartIndex > inorderEndIndex) {
        return null;
    }
    const rootVal = postorder[postOrderEndIndex];
    let rootIndexInInorder;
    for (let i = inorderStartIndex; i < inorderEndIndex + 1; i++) {
        if (inorder[i] === rootVal) {
            rootIndexInInorder = i;
            break;
        }
    }

    const root = new TreeNode(rootVal);

    root.left = buildTreeByIndexs(
        inorder,
        postorder,
        inorderStartIndex,
        rootIndexInInorder - 1,
        postorderStartIndex,
        rootIndexInInorder - 1 - inorderStartIndex + postorderStartIndex
    );

    root.right = buildTreeByIndexs(
        inorder,
        postorder,
        rootIndexInInorder + 1,
        inorderEndIndex,
        rootIndexInInorder - inorderEndIndex + postOrderEndIndex,
        postOrderEndIndex - 1
    );

    return root;
}
