/**
 * @param root: The root of binary tree
 * @return: root of new tree
 */
const cloneTree = function (root) {
    if(!root){
        return root;
    }
    const node = new TreeNode(root.val);
    node.left = cloneTree(root.left);
    node.right = cloneTree(root.right);
    return node;
}