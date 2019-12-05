/**
 * @param root: the root of binary tree
 * @return: the new root
 */
const convertBST = function (root) {
    if(!root){
        return root;
    }

    let sum = 0;
    function getSum(node){
        sum += node.val;
        node.left && getSum(node.left);
        node.right && getSum(node.right);
    }
    getSum(root);
    function convert(node){
        node.left && convert(node.left);
        sum -= node.val;
        node.val += sum;
        node.right && convert(node.right);
    }
    convert(root);
    return root;
}
