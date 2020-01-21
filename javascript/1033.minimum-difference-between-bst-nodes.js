/**
 * @param root: the root
 * @return: the minimum difference between the values of any two different nodes in the tree
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