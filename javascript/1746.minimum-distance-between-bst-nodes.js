/**
 * @param root:  a Binary Search Tree (BST) with the root node
 * @return: the minimum difference
 */
const minDiffInBST = function (root) {
    let result = Infinity;
    let lastVal = -Infinity;
    function inOrder(node){
        node.left && inOrder(node.left);
        result = Math.min(result,node.val-lastVal);
        lastVal = node.val;
        node.right && inOrder(node.right);
    }
    root && inOrder(root);
    return result;
}