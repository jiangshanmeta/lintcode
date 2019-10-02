/**
 * @param root: A Tree
 * @return: Inorder in ArrayList which contains node values.
 */
const inorderTraversal = function (root) {
    const result = [];
    root && inOrder(root,result);
    return result;
}

function inOrder(root,result){
    root.left && inOrder(root.left,result);
    result.push(root.val);
    root.right && inOrder(root.right,result);
}