/**
 * @param root: a TreeNode, the root of the binary tree
 * @return: 
 */
const invertBinaryTree = function (root) {
    if(!root){
        return root;
    }
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
}
