/**
 * @param root: A Tree
 * @return: Postorder in ArrayList which contains node values.
 */
const postorderTraversal = function (root) {
    const result = [];
    root && postOrder(root,result);
    return result;
}

function postOrder(root,result){
    root.left && postOrder(root.left,result);
    root.right && postOrder(root.right,result);
    result.push(root.val);
}
