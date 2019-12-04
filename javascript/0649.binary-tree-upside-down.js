/**
 * @param root: the root of binary tree
 * @return: new root
 */
const upsideDownBinaryTree = function (root) {
    if(!root || !root.left){
        return root;
    }
    return flip(root.left,root);
}

function flip(root,parent){
    if(!root){
        return parent;
    }
    const newRoot = flip(root.left,root);
    root.left = parent.right;
    parent.right = null;
    root.right = parent;
    parent.left = null;
    return newRoot;
}